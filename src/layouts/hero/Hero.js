import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import Button from "../../components/button/Button"
import {MainTitle} from "../../components/title/Title"
import {Paragraph} from "../../components/paragraph/Paragraph"
import WaveEnd from "../../components/waveEnd/WaveEnd"

import HeroImg from '../../assets/images/heroImage.webp'
import HeroWave from '../../assets/images/heroWaveS.png'

const HeroWrapper = styled.main`
    background-image: url(${HeroImg});
    background-size: 400px;
    background-position: top 0 right -100px;
    background-repeat: no-repeat;
    background-color: var(--accent-bright);
    width:100%;
    min-height: 80vh;
    position:relative;
    display:flex;
    @media (min-width: 920px) { 
        /* justify-content:flex-start; */
        background-size: 35%;
        background-position: top 0 right 120px;
     }
`;

const Content = styled.div`
  margin: 20% var(--margin) 0 var(--margin);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  @media (min-width: 920px) { 
        margin-top: 5%;
        width: 40%;
        justify-content:space-evenly;
     }
`;

const ButtonsWrapper=styled.div`
    font-size: var(--normal-font);
    width:fit-content;
    margin: 0 auto;
    @media (min-width: 920px) { 
        margin:0;
     }
`

const StyledLink = styled(Link)`
    font-weight: var(--Bold);
`

const Wrapper = styled.div`
  flex-basis:40%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;

const Hero = () => {
    return ( 
        <>
            <HeroWrapper>
                <Content>
                <MainTitle style={{width:"90%"}}>Zarabiaj nie wychodząc z domu.</MainTitle>
                <Wrapper>
                    <Paragraph>Praca dodatkowa dla każdego! Bez inwestycji i wkładu własnego. Zapłacimy Ci za każdą spędzoną chwilę na naszej stronie.</Paragraph>
                    <ButtonsWrapper>
                        <Link to="/auth/register"><Button>Dołącz teraz</Button></Link>{' '}lub{' '}<StyledLink to="/auth/login">zaloguj się</StyledLink>
                    </ButtonsWrapper>
                </Wrapper>
                </Content>
            </HeroWrapper> 
            <WaveEnd waveImg={HeroWave} />
        </>
    );
}
 
export default Hero;