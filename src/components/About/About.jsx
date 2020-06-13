import React from "react";
import { v4 } from "uuid";

import "./about.css";

const TECHNOLOGIES = [
  "React",
  "React Hooks",
  "Redux",
  "Redux Hooks",
  "React Routing System",
  "CSS3",
  "HTML5",
  "Simple Authentication",
  "Google Authentication",
  "Firebase database",
  "Others",
];

export default () => (
  <div className="aboutContainer">
    <h1>About page</h1>
    <p>
      This is a simple about page:
      <br />
      This is a test application to exercise and learn multiple technologies
      such as:
    </p>
    <ul>
      {TECHNOLOGIES.map((tech) => (
        <li key={v4()}>{tech}</li>
      ))}
    </ul>
  </div>
);
