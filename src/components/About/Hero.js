import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Avatar1 from "../assets/images/Avatar.svg";
import Avatar2 from "../assets/images/Avatar(1).svg";
import Avatar3 from "../assets/images/Avatar(2).svg";
import Avatar4 from "../assets/images/Avatar(3).svg";

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
  margin-bottom: 80px;
  padding-bottom: 160px;
`;

const Container = styled.div`
  display: grid;
  padding: 3rem calc((100vw - 1300px) / 2);
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  padding: 5rem 2rem;
  justify-content: center;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  color: #fff;
  background: transparent;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Hero = () => {
  const fadeText = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="about">
      <Container>
        <ColumnLeft>
          <motion.h1
            variants={fadeText}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Big Warm Welcome to the Open-Sourced Olafs
          </motion.h1>
          <motion.p
            variants={fadeText}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Meet some unique individuals{" "}
          </motion.p>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={Avatar1}
            alt="Avatar"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Avatar2}
            alt="Avatar"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Avatar3}
            alt="Avatar"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Avatar4}
            alt="Avatar"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
