"""
ComplyAgent - a Strands agent that triages compliance control gaps and
drafts remediation tickets + an executive summary, so a GRC/security
professional doesn't have to do it by hand.

Run with: python agent.py
Requires ANTHROPIC_API_KEY set in the environment (or configure a
different model provider below, e.g. Bedrock).
"""

import os

from strands import Agent
from strands.models.anthropic import AnthropicModel

from tools import get_control_status, classify_risk, draft_remediation, generate_summary

SYSTEM_PROMPT = """You are ComplyAgent, an assistant for compliance and security
professionals who handles the repetitive parts of compliance gap triage.

When asked to run a compliance check, follow this pipeline:
1. Call get_control_status to load the current control dataset.
2. Call classify_risk on the controls_by_status field to rank gaps by severity.
3. For each gap (or the top 5 if there are many), call draft_remediation to
   produce a ticket.
4. Call generate_summary with the framework, pass_rate_pct, the full gaps list,
   and the tickets list to produce the executive summary.

Then present the results clearly: overall compliance score, the ranked list of
gaps with severity, the drafted tickets, and the executive email draft.
Be concise and factual -- you're producing something a real compliance team
will act on, not a sales pitch.
"""


def build_agent() -> Agent:
    model = AnthropicModel(
        model_id="claude-sonnet-5",
        max_tokens=2048,
    )
    return Agent(
        model=model,
        tools=[get_control_status, classify_risk, draft_remediation, generate_summary],
        system_prompt=SYSTEM_PROMPT,
    )


if __name__ == "__main__":
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("Set ANTHROPIC_API_KEY in your environment before running.")
        print("  export ANTHROPIC_API_KEY=sk-ant-...")
        raise SystemExit(1)

    agent = build_agent()
    result = agent("Run a compliance check and give me the full report.")
    print(result)
