# ComplyAgent

An AI agent built with the Strands Agents SDK that handles the repetitive
parts of compliance gap triage: it reads a control assessment dataset,
classifies gaps by risk severity, drafts a remediation ticket for each one,
and writes an executive-ready summary email.

Built for the **Agents for Humans** hackathon, Professional Agents track.

## Why

Security and GRC teams (like the PCI-DSS compliance work this project draws
on) spend hours manually triaging control failures after every assessment:
figuring out which gaps matter most, writing tickets, and summarizing status
for leadership. ComplyAgent automates that handoff so a human only has to
review and approve, not draft from scratch.

## Pipeline

1. `get_control_status` — loads the control dataset, groups by pass/fail/partial
2. `classify_risk` — ranks gaps by severity using per-family risk weights
3. `draft_remediation` — writes a ticket (title, description, owner, priority) per gap
4. `generate_summary` — produces an overall score, top-5 risks, and an exec email draft

The severity scoring and ticket drafting logic is deterministic Python
(see `tools.py`), so it's auditable and testable independent of the LLM.
The agent's job is orchestrating the pipeline and producing natural-language
output, not deciding pass/fail itself.

## Setup

```bash
pip install -r requirements.txt
export ANTHROPIC_API_KEY=sk-ant-...
python agent.py
```

## Files

- `agent.py` — builds and runs the Strands Agent
- `tools.py` — the four pipeline tools
- `data/controls.json` — sample PCI-DSS-style control dataset (swap in a real dataset to demo against real data)

## Status

Core pipeline logic is built and tested independent of the LLM (see the
inline test in development notes). Next: wire up a simple web UI, deploy,
and record the demo video.
