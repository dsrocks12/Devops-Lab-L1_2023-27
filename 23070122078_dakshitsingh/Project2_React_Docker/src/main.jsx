import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  ["Git Workflow", "Feature branches, collaboration, and conflict resolution"],
  ["Docker", "Minimal, reproducible containers for Flask and React"],
  ["Jenkins", "Freestyle, Dockerized, and distributed Maven pipelines"],
];

function App() {
  return (
    <main>
      <header>
        <p className="eyebrow">DEVOPS LAB PORTFOLIO</p>
        <h1>Dakshit Singh</h1>
        <p className="subtitle">PNR 23070122078 · Build, automate, deploy.</p>
      </header>
      <section aria-label="Projects">
        {projects.map(([title, description]) => (
          <article key={title}>
            <span aria-hidden="true">0{projects.findIndex(([name]) => name === title) + 1}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>
      <footer>Containerized with Docker · Served by Nginx</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
