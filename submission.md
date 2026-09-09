# ComplyAgent — Devpost Text Description

## Tagline (one sentence)
An AI agent that triages compliance control gaps and drafts remediation
tickets, built with the Strands Agents SDK.

## What it does

ComplyAgent automates the most time-consuming part of a compliance
assessment cycle: figuring out what actually needs attention, and writing
the paperwork that gets it fixed. Given a set of compliance controls, the
agent loads the current pass/fail/partial status of every control, ranks
the failing and partial ones by risk severity, drafts a remediation ticket
for each of the top gaps (title, description, suggested owning team,
priority), and produces an executive-ready summary — an overall compliance
score, the top 5 risks, and a plain-language email draft ready to send to
leadership.

ComplyAgent isn't hardcoded to one framework. It ships with two synthetic
sample datasets (PCI-DSS v4.0 and SOC 2 Trust Services Criteria) and
accepts a custom JSON upload, since the severity-scoring logic doesn't
depend on any specific framework's control-family names — it gracefully
handles unrecognized families with a sensible default weight, which is
covered by an explicit unit test.

A security or GRC professional who would otherwise spend hours manually
reviewing a control spreadsheet gets a complete, structured report in
seconds, and only has to review and approve the output rather than draft
it from scratch.

## Who it's for

Security and GRC (Governance, Risk, and Compliance) professionals who run
recurring compliance assessments — the kind of work that follows every
PCI-DSS, SOC 2, or ISO audit cycle. This is drawn directly from real
compliance gap-triage work, not a hypothetical use case invented for the
hackathon.

## How it works

ComplyAgent is built with the **Strands Agents SDK**, using Claude Sonnet
4.5 via **Amazon Bedrock** as the reasoning model. The web UI has two
layers: an instant, deterministic metrics view (pass rate, gap counts by
severity) that renders immediately with no API call, and a full AI-generated
report, triggered on demand, where the agent orchestrates a four-tool
pipeline:

1. `get_control_status` — loads the selected control dataset (PCI-DSS,
   SOC 2, or a user's own upload) and groups controls by status
   (pass / fail / partial)
2. `classify_risk` — ranks failing and partial controls by severity, using
   per-control-family risk weights, with a safe fallback for unrecognized
   families
3. `draft_remediation` — writes a structured remediation ticket for each
   of the top gaps
4. `generate_summary` — produces the overall compliance score, the top 5
   risks, and an executive email draft

The severity-scoring and ticket-drafting logic is deterministic Python
(auditable and unit-tested independent of the LLM) — the model's role is
orchestrating the pipeline correctly and producing clear natural-language
output, not deciding pass/fail itself. This split is intentional: judgment
about *what the numbers mean* and *how to communicate them* is exactly
where an LLM adds value; deciding whether a control numerically passed is
not.

The project is deployed as a live Streamlit web app
(**complyagent-mj.streamlit.app**), so selecting a framework and clicking
"Generate Full AI Report" triggers the full pipeline and renders the
report directly in the browser — no local setup needed to see it work.

## Built with

Python, Strands Agents SDK, Amazon Bedrock, Claude Sonnet 4.5, Streamlit,
Streamlit Community Cloud, pytest

## Track

Professional Agents