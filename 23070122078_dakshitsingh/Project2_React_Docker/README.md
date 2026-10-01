# Project 2 — React Application in Docker

The React portfolio is built with Vite in a Node build stage and served from a small Nginx runtime image.

## Run locally

```bash
npm install
npm run dev
```

## Build and deploy with Docker

```bash
docker build -t dakshit-react:1.0 .
docker run --rm -d --name dakshit-react -p 8080:80 dakshit-react:1.0
curl http://localhost:8080/
```

Open <http://localhost:8080>.

## Evidence to add

- `screenshots/01-npm-build.png`
- `screenshots/02-docker-image.png`
- `screenshots/03-running-container.png`
- `screenshots/04-deployed-portfolio.png`
