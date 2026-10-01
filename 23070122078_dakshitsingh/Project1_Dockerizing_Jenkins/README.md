# Project 1 — Dockerizing Jenkins Pipeline

This declarative pipeline checks out the repository, builds the Flask Docker image, starts a temporary container, and verifies its health endpoint.

## Jenkins setup

1. Install the Pipeline and Git plugins.
2. Ensure the Jenkins agent can run Docker.
3. Create **Pipeline → Pipeline script from SCM**.
4. Set the script path to:

```text
23070122078_dakshitsingh/Project1_Dockerizing_Jenkins/Jenkinsfile
```

5. Run **Build Now**.

## Evidence to add

- `screenshots/01-pipeline-configuration.png`
- `screenshots/02-docker-build-stage.png`
- `screenshots/03-smoke-test-stage.png`
- `screenshots/04-successful-pipeline.png`
