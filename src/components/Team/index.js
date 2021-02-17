import React, { useEffect } from "react";
import Member1 from "../assets/images/team/rashika.jpg";
import Member2 from "../assets/images/team/samuel.jpeg";
import Member3 from "../assets/images/team/rashi.jpg";
import Member4 from "../assets/images/team/bodisha.jpeg";
import Member5 from "../assets/images/team/aitik.png";
import Member6 from "../assets/images/team/anjali.jpg";
import Member7 from "../assets/images/team/bushra.jpeg";
import Member8 from "../assets/images/team/dean.jpg";
import Member9 from "../assets/images/team/deepak.jpg";
import Member10 from "../assets/images/team/marco.jpg";
import Member11 from "../assets/images/team/sena.jpeg";
import Member12 from "../assets/images/team/shrill.jpg";
import Member13 from "../assets/images/team/sumi.jpg";
import Member14 from "../assets/images/team/yvon.jpeg";
import Member15 from "../assets/images/team/prashi.jpg";
import Member16 from "../assets/images/Avatar.svg";

import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  TeamContainer,
  TeamH1,
  TeamH2,
  TeamCard,
  TeamIcon,
  TeamP,
  TeamWrapper,
  SocialIconLink,
  SocialIcons,
} from "./TeamElements";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamComponent = (props) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

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

  const github_url = `https://github.com/${props.github}`;
  const twitter_url = `https://twitter.com/${props.twitter}`;
  const linkedin_url = `https://linkedin.com/in/${props.linkedin}`;
  return (
    <motion.div variants={item} ref={ref} initial="hidden" animate={controls}>
      <TeamCard>
        <TeamIcon src={props.url} />
        <TeamH2>{props.name}</TeamH2>
        <SocialIcons>
          {props.github != "" ? (
            <SocialIconLink
              href={github_url}
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </SocialIconLink>
          ) : (
            <div></div>
          )}
          {props.twitter != "" ? (
            <SocialIconLink
              href={twitter_url}
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
          ) : (
            <div></div>
          )}
          {props.linkedin != "" ? (
            <SocialIconLink
              href={linkedin_url}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          ) : (
            <div></div>
          )}
        </SocialIcons>
      </TeamCard>
    </motion.div>
  );
};

const Team = () => {
  return (
    <TeamContainer id="members">
      <TeamH1>Our Team</TeamH1>
      <TeamWrapper>
        <TeamComponent
          url={Member1}
          name="Rashika Karki"
          github="RashikaKarki"
          twitter="RashikaKarki"
          linkedin="RashikaKarki"
        />
        <TeamComponent
          url={Member2}
          name="Samuel Yuan"
          github="YuanSamuel"
          twitter="samuelyuan9"
          linkedin="yuansamuel"
        />
        <TeamComponent
          url={Member3}
          name="Rashi Sharma"
          github="rashi-s17"
          twitter="rashi_s17"
          linkedin="rashi-s17"
        />
        <TeamComponent
          url={Member15}
          name="Prashi Doval"
          github="prashi23"
          twitter="prashi_doval"
          linkedin="prashi_doval"
        />
        <TeamComponent
          url={Member5}
          name="Aitik Gupta"
          github="aitikgupta"
          twitter="aitikgupta"
          linkedin="aitik-gupta"
        />
        <TeamComponent
          url={Member6}
          name="Anjali Soni"
          github="anjalisoni3655"
          twitter="anjalisoni3655"
          linkedin="anjalisoni3655"
        />
        <TeamComponent
          url={Member8}
          name="Dean Gladish"
          github="gladishd"
          twitter=""
          linkedin=""
        />
        <TeamComponent
          url={Member7}
          name="Bushra Akram"
          github="codingbug671"
          twitter=""
          linkedin=""
        />
        <TeamComponent
          url={Member9}
          name="Deepak Agrawal"
          github="DebugAgrawal"
          twitter="debugagrawal"
          linkedin="your-network-is-your-net-worth"
        />
        <TeamComponent
          url={Member10}
          name="Marco Chan"
          github="m2chan"
          twitter=""
          linkedin="marco-chan"
        />
        <TeamComponent
          url={Member11}
          name="Sena Yevenyo"
          github="iamyevesky"
          twitter="iamyevesky"
          linkedin="sena-yevenyo"
        />
        <TeamComponent
          url={Member4}
          name="Bodisha Thomas"
          github="bodhisha"
          twitter="BodhishaThomas"
          linkedin="bodhisha"
        />
        <TeamComponent
          url={Member12}
          name="Shrill Shrestha"
          github="ShrillShrestha"
          twitter=""
          linkedin=""
        />
        <TeamComponent
          url={Member13}
          name="Sumi Koli"
          github="sgkolli535"
          twitter=""
          linkedin=""
        />
        <TeamComponent
          url={Member14}
          name="Yvon"
          github="yvonmanzi"
          twitter=""
          linkedin="yvonmanzi"
        />
        <TeamComponent
          url={Member16}
          name="Steven Tey"
          github="steven-tey"
          twitter=""
          linkedin=""
        />
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Team;
