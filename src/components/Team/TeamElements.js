import styled from 'styled-components'

export const TeamContainer = styled.div`
    height: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 2500px;
    }
`

export const TeamWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (width-max: 768 px)
    {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const TeamCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 280px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const TeamIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
    object-fit: cover
`

export const TeamH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const TeamH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const TeamP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100px;
`
export const SocialIconLink = styled.a`
    color: #000;
    font-size: 24px;
`