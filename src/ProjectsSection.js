import "./ProjectsSection.css";
import ProjectPhoto1 from "./assets/images/ProjectPhoto1.jpg";
import ProjectPhoto2 from "./assets/images/ProjectPhoto2.jpg";
import ProjectPhoto3 from "./assets/images/ProjectPhoto3.jpg";
import GitHubLogo from "./assets/GitHubLogo.png";
import LaunchIcon from "./assets/LaunchIcon.png";
import Button from "@material-ui/core/Button";

export default function Projects() {
  function getTechList(tech) {
    return tech.map((name, index) => (
      <p key={name + index} className="tech-name">
        {name}
      </p>
    ));
  }

  return (
    <div className="projects-list">
      <h1>Projects</h1>
      <div className="project">
        <img src={ProjectPhoto1} className="project-photo" />
        <div className="project-info">
          <h2 className="project-title">Personal Portfolio</h2>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ProjectTechnologies>
            {getTechList(["Jekyll", "HTML", "SCSS", "Static Site"])}
          </ProjectTechnologies>
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
        <img src={ProjectPhoto2} className="project-photo" />
        <div className="project-info">
          <h2 className="project-title">Sample Project</h2>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="project">
        <img src={ProjectPhoto3} className="project-photo" />
        <div className="project-info">
          <h2 className="project-title">Sample Project 2</h2>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <Button
        variant="outlined"
        color="default"
        onClick={() => window.open(link, "_blank")}
        size="small"
      >
        <img src={getIcon()} />
        &nbsp;&nbsp;{type}
      </Button>
    </div>
  );
}

function ProjectTechnologies({ children }) {
  return <div className="project-tech">{children}</div>;
}
