import React from 'react';
import Header from './header'
import Home from '../components/Home/home';
import Hero from '../components/About/Hero';
import Project from '../components/Project/ProjectsSection';
import Footer from '../components/Footer';
import Team from '../components/Team/index';

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
