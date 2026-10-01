# Project 4 — Distributed Jenkins Pipeline for Maven

This Maven portfolio is compiled on one Jenkins agent and tested/packaged on a second agent. The final stage verifies both nodes in parallel.

## Local verification

```bash
mvn clean test package
java -jar target/devops-portfolio-1.0.0.jar
```

## Jenkins architecture

```text
Jenkins controller
├── maven-agent-1: checkout, clean, compile, stash
└── maven-agent-2: unstash, test, package, archive
```

Both agents require Java 17 and Maven. Create two Jenkins nodes and assign the exact labels `maven-agent-1` and `maven-agent-2`.

Create a **Pipeline from SCM** job with this script path:

```text
23070122078_dakshitsingh/Project4_Distributed_Jenkins_Maven/Jenkinsfile
```

The pipeline publishes JUnit results and archives the executable JAR.

## Evidence to add

- `screenshots/01-agent-1-configuration.png`
- `screenshots/02-agent-2-configuration.png`
- `screenshots/03-distributed-stage-view.png`
- `screenshots/04-junit-results.png`
- `screenshots/05-archived-jar.png`
- `screenshots/06-successful-build.png`
