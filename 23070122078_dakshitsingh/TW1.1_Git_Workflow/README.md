# TW1.1 — Git Workflow & Collaboration

## Task 1.1: initialize and commit

```bash
git init
git branch -M main
git add app.py requirements.txt Dockerfile README.md
git commit -m "feat: add Hello World Flask application"
```

## Task 1.2: feature branch

```bash
git switch -c feature/user-auth
# Modify the startup print statement in app.py.
git add app.py
git commit -m "feat: add user authentication startup message"
git push -u origin feature/user-auth
```

## Task 1.3: conflict and resolution

```bash
git switch main
# Change the same startup print statement differently.
git add app.py
git commit -m "chore: update main startup message"
git merge feature/user-auth
# Git reports a conflict. Edit app.py, remove conflict markers, and retain both meanings.
git add app.py
git commit -m "merge: resolve user-auth startup message conflict"
git push origin main
```

The resolved statement is:

```python
print("Starting the Flask application with resolved main and user-auth changes")
```

## Run

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
curl http://localhost:5000/
```

## Evidence to add

- `screenshots/01-initial-commit.png`
- `screenshots/02-feature-branch-pushed.png`
- `screenshots/03-merge-conflict.png`
- `screenshots/04-conflict-resolved.png`
- `screenshots/05-github-branches.png`
