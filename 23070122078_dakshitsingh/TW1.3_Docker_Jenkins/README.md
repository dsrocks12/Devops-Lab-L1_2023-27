# TW1.3 — Docker & Jenkins Freestyle Project

## Task 3.1: Flask container

```bash
cd ../TW1.1_Git_Workflow
docker build -t dakshit-flask:1.0 .
docker run --rm -d --name dakshit-flask -p 5000:5000 dakshit-flask:1.0
curl http://localhost:5000/
docker logs dakshit-flask
docker stop dakshit-flask
```

The image uses Python Alpine, runs as a non-root user, and exposes port 5000.

## Task 3.2: Jenkins Freestyle project

1. Select **New Item**, enter `Dakshit-Flask-Freestyle`, and choose **Freestyle project**.
2. Under **Source Code Management**, select Git and enter the submission repository URL.
3. Set the branch specifier to the submitted GitHub branch.
4. Add **Build Steps → Execute shell**:

```bash
chmod +x 23070122078_dakshitsingh/TW1.3_Docker_Jenkins/jenkins-build.sh
23070122078_dakshitsingh/TW1.3_Docker_Jenkins/jenkins-build.sh
```

5. Save and choose **Build Now**.

## Evidence to add

- `screenshots/01-docker-build.png`
- `screenshots/02-flask-container-response.png`
- `screenshots/03-jenkins-job-config.png`
- `screenshots/04-successful-console-output.png`
