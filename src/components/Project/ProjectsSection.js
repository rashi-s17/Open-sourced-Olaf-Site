import React, { useEffect } from "react";
import "./ProjectsSection.css";
import ProjectPhoto1 from "../assets/images/ProjectPhoto1.png";
import ProjectPhoto2 from "../assets/images/ProjectPhoto2.svg";
import ProjectPhoto3 from "../assets/images/ProjectPhoto3.svg";
import GitHubLogo from "../../assets/GitHubLogo.png";
import LaunchIcon from "../../assets/LaunchIcon.png";
import Button from "@material-ui/core/Button";
import { useMediaQuery } from "react-responsive";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 1.0 } },
};

export default function Projects() {
  return (
    <div className="projects-page" id="projects">
      <h1>Projects</h1>
      <motion.div
        className="projects-list"
        // variants={projects}
        // initial="hidden"
        // animate="show"
      >
        <ProjectDiv
          photo={ProjectPhoto1}
          title="Personal Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["Jekyll", "HTML", "SCSS", "Static Site"]}
          links={[
            {
              type: "GitHub",
              link: "https://github.com/MLH-Fellowship/portfolio-template",
            },
            {
              type: "Launch",
              link: "https://mlh-fellowship.github.io/portfolio-template",
            },
          ]}
        ></ProjectDiv>
        <ProjectDiv
          photo={ProjectPhoto2}
          title="Sample Project"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["React Native", "Firebase", "Mobile App"]}
          links={[
            {
              type: "GitHub",
              link: "https://github.com",
            },
          ]}
        ></ProjectDiv>
        <ProjectDiv
          photo={ProjectPhoto3}
          title="Sample Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["Python", "Django", "HTML"]}
          links={[
            {
              type: "GitHub",
              link: "https://github.com/django/django",
            },
            {
              type: "Launch",
              link: "https://www.djangoproject.com/",
            },
          ]}
        ></ProjectDiv>
      </motion.div>
    </div>
  );
}

function ProjectDiv({ photo, title, description, tech, links }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  const isNarrow = useMediaQuery({ query: "(max-width: 900px" });
  var projectClass = isNarrow ? "project-portrait" : "project-landscape";
  var linksClass = isNarrow
    ? "project-links-portrait"
    : "project-links-landscape";

  function getTechList(tech) {
    return tech.map((name, index) => (
      <p key={name + index} className="tech-name">
        {name}
      </p>
    ));
  }

  function getLinksList(links) {
    return links.map((link, index) => (
      <ProjectLink
        key={link["link"] + index}
        type={link["type"]}
        link={link["link"]}
      />
    ));
  }

  return (
    <motion.div
      ref={ref}
      className={projectClass}
      variants={item}
      initial="hidden"
      animate={controls}
    >
      <img src={photo} className="project-photo" />
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        {tech ? (
          <ProjectTechnologies>{getTechList(tech)}</ProjectTechnologies>
        ) : (
          <div></div>
        )}
        {links ? (
          <ProjectLinks>{getLinksList(links)}</ProjectLinks>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
}

function ProjectTechnologies({ children }) {
  return <div className="project-tech">{children}</div>;
}

function ProjectLinks({ children }) {
  return <div className="project-links">{children}</div>;
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
