import React from 'react';
import Header from './header'
import Home from '../components/Home/home';
import Hero from '../components/About/Hero';
import Project from '../components/Project/ProjectsSection';
import Member from '../components/Member/PodMember';
import Footer from '../components/Footer';
import Team from '../components/Team/index';
import Snowman from '../components/BuildASnowman/BuildASnowman.js';

const home = () => {
  return (
    <>
    <Header />
    <Home />
    <Hero />
    <Project />
    <Team />
    <Footer />
    </>
  );
};

export default home;
