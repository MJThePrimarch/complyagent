"""
ComplyAgent web UI. Run with: streamlit run app.py

Displays a "Run Compliance Check" button. Clicking it builds the Strands
agent and runs the full pipeline (load controls -> classify risk -> draft
tickets -> generate exec summary), showing the result in the browser.

Requires ANTHROPIC_API_KEY set in the environment (see agent.py) before
this will actually run the agent. The UI itself works with no API access;
only clicking "Run Compliance Check" needs a funded key or Bedrock access.
"""

import streamlit as st

from agent import build_agent

st.set_page_config(page_title="ComplyAgent", page_icon="🛡️")

st.title("🛡️ ComplyAgent")
st.write(
    "An AI agent built with the Strands Agents SDK that triages compliance "
    "control gaps, drafts remediation tickets, and writes an executive "
    "summary — so a GRC/security professional doesn't have to do it by hand."
)

st.caption("Built for the Agents for Humans hackathon — Professional Agents track")

st.divider()

if st.button("Run Compliance Check", type="primary"):
    with st.spinner("Agent is loading controls, classifying risk, and drafting tickets..."):
        try:
            agent = build_agent()
            result = agent("Run a compliance check and give me the full report.")
            st.success("Done.")
            st.markdown(str(result))
        except Exception as e:
            st.error(f"Something went wrong: {e}")
            st.info(
                "If this mentions credits or billing, the Anthropic API key "
                "or AWS Bedrock access isn't funded/enabled yet."
            )
else:
    st.info("Click the button above to run ComplyAgent against the sample control dataset.")