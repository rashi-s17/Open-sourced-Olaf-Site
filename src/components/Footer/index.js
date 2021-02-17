import React from 'react';
import {FooterContainer, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements';
import {FaTwitter, FaGithub,FaLinkedin, FaHeart } from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights>
                        Made with <FaHeart/>
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://github.com/orgs/Open-Sourced-Olaf/dashboard" target="_blank" aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer;