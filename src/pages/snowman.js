import React from 'react';
import SnowmanHeader from './snowman-header';
import Snowman from '../components/BuildASnowman/BuildASnowman.js';

const snowman = () => {
    return (
      <>
      <SnowmanHeader/>
      <Snowman />
      </>
    );
  };
  
  export default snowman;