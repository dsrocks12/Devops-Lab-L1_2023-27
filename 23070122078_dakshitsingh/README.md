# DevOps Lab L1 — Dakshit Singh

**PNR:** 23070122078  
**Student:** Dakshit Singh

This branch contains the complete DevOps lab submission.

## Assignment and project index

1. [TW1.1 — Git Workflow & Collaboration](./TW1.1_Git_Workflow/README.md)
2. [TW1.2 — Jira Project & Issue Tracking](./TW1.2_Jira/README.md)
3. [TW1.3 — Docker & Jenkins Freestyle](./TW1.3_Docker_Jenkins/README.md)
4. [Project 1 — Dockerizing Jenkins Pipeline](./Project1_Dockerizing_Jenkins/README.md)
5. [Project 2 — React Application in Docker](./Project2_React_Docker/README.md)
6. [Project 4 — Distributed Jenkins Pipeline](./Project4_Distributed_Jenkins_Maven/README.md)

## Branching model

```text
main
├── feature/user-auth
├── feature/react-docker
├── feature/jenkins-pipeline
└── feature/distributed-maven
```

- `main` contains stable, reviewed work.
- `feature/*` branches contain assignment changes.
- Feature branches are merged into `main` after verification.
- The Git-conflict exercise uses `feature/user-auth` and is documented in TW1.1.

## Evidence

Each assignment README lists the commands to execute and the screenshots to capture. Screenshots must show the real GitHub, Jira, Docker, and Jenkins runs; they are not fabricated or pre-generated.

## Quick start

```bash
# Flask application
cd TW1.1_Git_Workflow
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py

# All deployable containers
cd ..
docker compose up --build
```

Flask is available at <http://localhost:5000> and React at <http://localhost:8080>.
