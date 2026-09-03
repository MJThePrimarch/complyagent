from tools import get_control_status, classify_risk, draft_remediation

def test_get_control_status_returns_pass_rate():
    result = get_control_status()
    assert "pass_rate_pct" in result
    assert result["pass_rate_pct"] >= 0

def test_classify_risk_sorts_by_severity():
    fake_status = {
        "fail": [{"id": "X1", "family": "Access Control", "description": "test"}],
        "partial": [],
    }
    gaps = classify_risk(fake_status)
    assert len(gaps) == 1
    assert gaps[0]["severity_label"] in ["critical", "high", "medium", "low"]

def test_draft_remediation_produces_ticket():
    ticket = draft_remediation("X1", "Access Control", "test description", "high")
    assert "title" in ticket
    assert ticket["priority"] == "P2"