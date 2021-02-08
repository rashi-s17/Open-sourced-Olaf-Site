import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const Section = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
`;

const Container = styled.div`
    display: grid;
    padding: 3rem calc((100vw - 1300px) /2);
    grid-template-columns: 1fr 1fr;
    height: 100vh;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const home = () => {
    return
        <div>
           Hero           
        </div>;
};

export default home;


