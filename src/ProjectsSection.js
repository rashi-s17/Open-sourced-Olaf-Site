import "./ProjectsSection.css";
import ProjectPhoto1 from "./assets/images/ProjectPhoto1.jpg";
import ProjectPhoto2 from "./assets/images/ProjectPhoto2.jpg";
import ProjectPhoto3 from "./assets/images/ProjectPhoto3.jpg";
import GitHubLogo from "./assets/GitHubLogo.png";
import LaunchIcon from "./assets/LaunchIcon.png";

export default function Projects() {
  return (
    <div className="projects-list">
      <h1>Projects</h1>
      <div className="project">
        <img src={ProjectPhoto1} class="project-photo"/>
        <div className="project-info">
          <h2 class="project-title">Personal Portfolio</h2>
          <p class="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="project-links">
          <ProjectLink
            type="GitHub"
            link="https://github.com/MLH-Fellowship/portfolio-template"
          />
          <ProjectLink
            type="Launch"
            link="https://mlh-fellowship.github.io/portfolio-template"
          />
        </div>
      </div>
      <div className="project">
        <img src={ProjectPhoto2} class="project-photo"/>
        <div className="project-info">
          <h2 class="project-title">Sample Project</h2>
          <p class="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="project">
        <img src={ProjectPhoto3} class="project-photo"/>
        <div className="project-info">
          <h2 class="project-title">Sample Project 2</h2>
          <p class="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectLink({ type, link }) {
  function getIcon() {
    if (type === "GitHub") {
      return GitHubLogo;
    } else if (type === "Launch") {
      return LaunchIcon;
    }
  }

  return (
    <div className="project-link">
      <a href={link} target="_blank">
        <img src={getIcon()}/>
      </a>
    </div>
  );
}
