import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #131313; 
`

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1100px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    margin-top: 8px;
    font-size: 1em;
    margin-left: 50%;

    @media screen and (max-width: 820px) {
        margin-left: 0px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`
