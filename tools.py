"""
ComplyAgent tools.

Four tools, wired in a pipeline by the agent's system prompt:
  get_control_status -> classify_risk -> draft_remediation -> generate_summary

Each tool is deterministic Python logic (not an LLM call) so the pipeline
is testable and auditable on its own -- the LLM's job is orchestration and
writing natural-language output (remediation tickets, exec summary), not
deciding whether a control passed.
"""

import json
from pathlib import Path

from strands import tool

DATA_PATH = Path(__file__).parent / "data" / "controls.json"

# Severity weights per control family. Higher = more critical if it fails.
# Modeled loosely on PCI-DSS risk framing from the VNigeria POC.
FAMILY_WEIGHT = {
    "Network Security Controls": 5,
    "Secure Configuration": 4,
    "Protect Stored Account Data": 5,
    "Secure Systems and Software": 5,
    "Access Control": 4,
    "Identification and Authentication": 4,
    "Logging and Monitoring": 3,
    "Vulnerability Management": 3,
    "Security Awareness": 2,
}


@tool
def get_control_status(dataset_path: str = str(DATA_PATH)) -> dict:
    """Load the compliance control dataset and return controls grouped by status.

    Args:
        dataset_path: Path to the controls JSON file. Defaults to the bundled
            sample dataset.

    Returns:
        A dict with the framework name, assessment date, overall pass rate,
        and controls grouped into 'pass', 'fail', and 'partial' lists.
    """
    with open(dataset_path) as f:
        data = json.load(f)

    controls = data["controls"]
    grouped = {"pass": [], "fail": [], "partial": []}
    for c in controls:
        grouped[c["status"]].append(c)

    total = len(controls)
    pass_rate = round(100 * len(grouped["pass"]) / total, 1) if total else 0.0

    return {
        "framework": data["framework"],
        "assessment_date": data["assessment_date"],
        "total_controls": total,
        "pass_rate_pct": pass_rate,
        "controls_by_status": grouped,
    }


@tool
def classify_risk(controls_by_status: dict) -> list:
    """Classify failing and partial controls by risk severity.

    Args:
        controls_by_status: The 'controls_by_status' dict returned by
            get_control_status (must contain 'fail' and 'partial' lists).

    Returns:
        A list of gap dicts sorted by descending severity score, each with
        id, family, description, status, severity_score, and severity_label.
    """
    gaps = []
    for status, penalty in (("fail", 1.0), ("partial", 0.5)):
        for c in controls_by_status.get(status, []):
            weight = FAMILY_WEIGHT.get(c["family"], 3)
            score = round(weight * penalty, 2)
            gaps.append({
                "id": c["id"],
                "family": c["family"],
                "description": c["description"],
                "status": status,
                "severity_score": score,
            })

    gaps.sort(key=lambda g: g["severity_score"], reverse=True)

    for g in gaps:
        if g["severity_score"] >= 4:
            g["severity_label"] = "critical"
        elif g["severity_score"] >= 2.5:
            g["severity_label"] = "high"
        elif g["severity_score"] >= 1.5:
            g["severity_label"] = "medium"
        else:
            g["severity_label"] = "low"

    return gaps


@tool
def draft_remediation(gap_id: str, family: str, description: str, severity_label: str) -> dict:
    """Draft a remediation ticket for a single compliance gap.

    Args:
        gap_id: The control ID (e.g. 'REQ-1.2.1').
        family: The control family (e.g. 'Network Security Controls').
        description: The control's requirement description.
        severity_label: One of 'critical', 'high', 'medium', 'low'.

    Returns:
        A ticket dict with title, body, suggested_owner, and priority,
        ready to hand to a ticketing system or include in a report.
    """
    owner_map = {
        "Network Security Controls": "Network/Infra Team",
        "Secure Configuration": "SysAdmin / Platform Team",
        "Protect Stored Account Data": "Application Security Team",
        "Secure Systems and Software": "DevOps / Patch Management",
        "Access Control": "IAM / Identity Team",
        "Identification and Authentication": "IAM / Identity Team",
        "Logging and Monitoring": "SOC / Detection Engineering",
        "Vulnerability Management": "Security Engineering",
        "Security Awareness": "GRC / Training Team",
    }
    priority_map = {"critical": "P1", "high": "P2", "medium": "P3", "low": "P4"}

    ticket = {
        "id": gap_id,
        "title": f"[{priority_map.get(severity_label, 'P3')}] Remediate {gap_id}: {family}",
        "body": (
            f"Control {gap_id} ({family}) is currently non-compliant.\n\n"
            f"Requirement: {description}\n\n"
            f"Risk: Failing this control leaves a {severity_label}-severity gap "
            f"in the {family} control family. Recommend remediation before the "
            f"next assessment cycle."
        ),
        "suggested_owner": owner_map.get(family, "GRC Team"),
        "priority": priority_map.get(severity_label, "P3"),
    }
    return ticket


@tool
def generate_summary(framework: str, pass_rate_pct: float, gaps: list, tickets: list) -> dict:
    """Generate an executive-ready compliance summary.

    Args:
        framework: The compliance framework name.
        pass_rate_pct: Overall pass rate percentage.
        gaps: The list of gap dicts from classify_risk.
        tickets: The list of ticket dicts from draft_remediation.

    Returns:
        A dict with overall_score, top_risks (top 5 by severity), and an
        exec_email_draft string.
    """
    top_risks = gaps[:5]

    risk_lines = "\n".join(
        f"  - [{g['severity_label'].upper()}] {g['id']} ({g['family']})"
        for g in top_risks
    )

    exec_email = (
        f"Subject: Compliance Status Update - {framework}\n\n"
        f"Team,\n\n"
        f"Our latest compliance assessment against {framework} shows a "
        f"{pass_rate_pct}% pass rate across all evaluated controls.\n\n"
        f"Top risk areas requiring attention:\n{risk_lines}\n\n"
        f"{len(tickets)} remediation tickets have been drafted and assigned "
        f"to the relevant owning teams. Recommend prioritizing critical and "
        f"high-severity items before the next audit cycle.\n\n"
        f"Full ticket list and control-level detail available on request."
    )

    return {
        "overall_score_pct": pass_rate_pct,
        "top_risks": top_risks,
        "ticket_count": len(tickets),
        "exec_email_draft": exec_email,
    }
