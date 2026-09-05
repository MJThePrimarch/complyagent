"""
ComplyAgent - a Strands agent that triages compliance control gaps and
drafts remediation tickets + an executive summary, so a GRC/security
professional doesn't have to do it by hand.

Run with: python agent.py

Uses Claude via AWS Bedrock (not the direct Anthropic API), so it runs on
AWS hackathon credits. Requires AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY,
and AWS_DEFAULT_REGION set in the environment, and Bedrock model access
granted for the Claude model below in that region.
"""

import os

from strands import Agent
from strands.models import BedrockModel

from tools import get_control_status, classify_risk, draft_remediation, generate_summary

# Set via env var so it's easy to swap models without editing code.
# This should match whatever model you confirmed works in the Bedrock
# Playground (check the model's detail page in Model Catalog for the
# exact ID string).
BEDROCK_MODEL_ID = os.environ.get(
    "BEDROCK_MODEL_ID", "us.anthropic.claude-sonnet-4-5-20250929-v1:0"
)

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
    model = BedrockModel(
        model_id=BEDROCK_MODEL_ID,
        region_name=os.environ.get("AWS_DEFAULT_REGION", "us-east-1"),
        max_tokens=8192,
    )
    return Agent(
        model=model,
        tools=[get_control_status, classify_risk, draft_remediation, generate_summary],
        system_prompt=SYSTEM_PROMPT,
    )


if __name__ == "__main__":
    if not os.environ.get("AWS_ACCESS_KEY_ID"):
        print("Set your AWS credentials in the environment before running:")
        print("  set AWS_ACCESS_KEY_ID=...")
        print("  set AWS_SECRET_ACCESS_KEY=...")
        print("  set AWS_DEFAULT_REGION=us-east-1")
        raise SystemExit(1)

    agent = build_agent()
    result = agent("Run a compliance check and give me the full report.")
    print(result)