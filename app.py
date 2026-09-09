"""
ComplyAgent web UI. Run with: streamlit run app.py

Protocol library: bundled synthetic datasets for popular compliance
frameworks, plus support for uploading a custom/niche one. Two layers:
1. Instant, deterministic metrics -- no LLM call, computed directly.
2. Full AI-generated report (tickets + exec email) -- runs the real
   Strands agent via Bedrock, on demand.
"""

import json
import tempfile
from pathlib import Path

import streamlit as st

from agent import build_agent
from tools import get_control_status, classify_risk

ROOT = Path(__file__).parent
ICON_PATH = ROOT / "assets" / "favicon.png"
LOGO_PATH = ROOT / "assets" / "logo.png"

st.set_page_config(
    page_title="ComplyAgent",
    page_icon=str(ICON_PATH) if ICON_PATH.exists() else "🛡️",
    layout="wide",
)

# --- Protocol library: add a new framework by adding one line here ---
PROTOCOLS = {
    "PCI-DSS v4.0": ROOT / "data" / "controls.json",
    "SOC 2 Trust Services Criteria": ROOT / "data" / "controls_soc2.json",
    "ISO/IEC 27001:2022": ROOT / "data" / "controls_iso27001.json",
    "HIPAA Security Rule": ROOT / "data" / "controls_hipaa.json",
    "NIST Cybersecurity Framework 2.0": ROOT / "data" / "controls_nist_csf.json",
}

SEVERITY_ORDER = ["critical", "high", "medium", "low"]
SEVERITY_COLOR = {"critical": "🔴", "high": "🟠", "medium": "🟡", "low": "🟢"}


def pick_dataset():
    st.sidebar.header("Compliance protocol")
    choice = st.sidebar.radio("Choose a framework", list(PROTOCOLS.keys()) + ["Upload your own (JSON)"])
    if choice == "Upload your own (JSON)":
        uploaded = st.sidebar.file_uploader("Control dataset (.json)", type=["json"])
        if uploaded is None:
            st.sidebar.info("Upload a JSON file matching the controls.json schema.")
            return None
        tmp = tempfile.NamedTemporaryFile(delete=False, suffix=".json")
        tmp.write(uploaded.getvalue())
        tmp.close()
        try:
            json.loads(Path(tmp.name).read_text())
        except json.JSONDecodeError as e:
            st.sidebar.error(f"That file isn't valid JSON: {e}")
            return None
        return tmp.name
    return str(PROTOCOLS[choice])


# --- Header, matching site branding ---
h1, h2 = st.columns([1, 8])
with h1:
    if LOGO_PATH.exists():
        st.image(str(LOGO_PATH), width=72)
with h2:
    st.title("ComplyAgent")
st.write(
    "An AI agent built with the Strands Agents SDK that triages compliance "
    "control gaps, drafts remediation tickets, and writes an executive "
    "summary — so a GRC/security professional doesn't have to do it by hand."
)
st.divider()

dataset_path = pick_dataset()
if dataset_path is None:
    st.stop()

try:
    status = get_control_status(dataset_path)
    gaps = classify_risk(status["controls_by_status"])
except Exception as e:
    st.error(f"Couldn't read this dataset: {e}")
    st.stop()

st.subheader(f"📊 {status['framework']}")
c1, c2, c3, c4 = st.columns(4)
c1.metric("Total controls", status["total_controls"])
c2.metric("Pass rate", f"{status['pass_rate_pct']}%")
c3.metric("Gaps found", len(gaps))
sev = {s: sum(1 for g in gaps if g["severity_label"] == s) for s in SEVERITY_ORDER}
c4.metric("Critical gaps", sev["critical"])

with st.expander("See all ranked gaps (instant, no AI call needed)"):
    for g in gaps:
        st.write(f"{SEVERITY_COLOR[g['severity_label']]} **{g['id']}** ({g['family']}) — {g['severity_label'].upper()}")

st.divider()
st.subheader("🤖 Full AI Report")
st.write("Runs the agent: ranks gaps, drafts remediation tickets, and writes an executive email.")

if st.button("Generate Full AI Report", type="primary"):
    with st.spinner("Agent is orchestrating tools via Bedrock — this takes a few seconds..."):
        try:
            agent = build_agent()
            prompt = f"Run a compliance check using the dataset at '{dataset_path}' and give me the full report."
            result = agent(prompt)
            st.success("Done.")
            st.markdown(str(result))
        except Exception as e:
            st.error(f"Something went wrong: {e}")
            st.info("If this mentions credits, billing, or model access, the AWS Bedrock setup isn't funded/enabled.")
