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
    return(
        <div>
            <h2>hi</h2>
           <div className="tenor-gif-embed" data-postid="10353703" data-share-method="host" data-width="100%" data-aspect-ratio="1.1369863013698631"><a href="https://tenor.com/view/olaf-frozen-gif-10353703">Olaf Frozen GIF</a> from <a href="https://tenor.com/search/olaf-gifs">Olaf GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>           
        </div>
    );
};

export default home;


