import "./PodMember.css";
import ProjectPhoto1 from "../assets/images/Avatar.svg";
import ProjectPhoto2 from "../assets/images/Avatar(1).svg";
import ProjectPhoto3 from "../assets/images/Avatar(2).svg";
import GitHubLogo from "../assets/twitter.png";
import LaunchIcon from "../assets/linkedin.png";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "react-responsive";

export default function Members() {
  const isNarrow = useMediaQuery({ query: "(max-width: 900px" });

  function getTechList(tech) {
    return tech.map((name, index) => (
      <p key={name + index} className="tech-name">
        {name}
      </p>
    ));
  }

  var projectClass = isNarrow ? "project-portrait" : "project-landscape";
  var linksClass = isNarrow
    ? "project-links-portrait"
    : "project-links-landscape";

  return (
    <div className="member-list" id="members">
    <h1 class="member-heading">Pod Members</h1>
      <div className={projectClass}>
        <img src={ProjectPhoto1} className="project-photo" />
        <div className="project-info">
          <h2 className="project-title">Samuel Yuan</h2>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ProjectTechnologies>
            {getTechList(["Mobile App Development ", "Sports", "Hackathons", "Tech Communities"])}
          </ProjectTechnologies>
          <div className="project-links">
            <ProjectLink
              type="Twitter"
              link="https://twitter.com/MLHacks"
            />
            <ProjectLink
              type="LinkedIn"
              link="https://www.linkedin.com/company/major-league-hacking/"
            />
          </div>
        </div>
      </div>
      <div className={projectClass}>
        <img src={ProjectPhoto2} className="project-photo" />
        <div className="project-info">
          <h2 className="project-title">Avatar 2</h2>
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={projectClass}>
        <img src={ProjectPhoto3} className="project-photo" />
        <div className="project-info">
          <h2 className="project-title">Avatar 3</h2>
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
    if (type === "Twitter") {
      return GitHubLogo;
    } else if (type === "LinkedIn") {
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
