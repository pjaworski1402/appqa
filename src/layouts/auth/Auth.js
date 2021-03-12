import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import {MainTitle} from '../../components/title/Title'
import Input from '../../components/input/Input'
import Checkbox from '../../components/input/Checkbox'
import WaveEnd from '../../components/waveEnd/WaveEnd'
import Button from '../../components/button/Button'
import Separator from "../../components/separator/Separator"

import loginWave from '../../assets/images/loginWave.png'
import userIco from '../../assets/icons/user.svg'
import emailIco from '../../assets/icons/mail.svg'
import passwordIco from '../../assets/icons/lock.svg'
import blobAuthImg from '../../assets/images/blobAuth.svg'

const Layout = styled.div`
    height: 100vh;
`;

const Banner = styled.div`
    background-color: var(--accent-dark);
    height: 20%;
    display:flex;
    align-items:center;
`;

const Form = styled.form`
    margin: 0 var(--margin);
    height: 60% ;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`;

const Label = styled.label`
    user-select: none;
`

const PasswordOptions = styled.div`
    display:flex;
    justify-content:space-between;
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledLink = styled(Link)`
    & button{
        width:100%;
    }
`

const Login = () => {
    const [emailState, setEmailState]=useState("");
    const [passwordState, setPasswordState]=useState("");
    const [rememberMeState, setRememberMeState]=useState(false);

    return ( 
        <Layout>
            <Banner>
                <MainTitle style={{padding:'0 var(--margin)'}}>Witaj <br /> ponownie.</MainTitle>
            </Banner>
            <WaveEnd waveImg={loginWave} />
            <Form>
                <Input value={emailState} onChange={e=>setEmailState(e.target.value)} ico={emailIco} placeholder="Email" />
                <Input value={passwordState} onChange={e=>setPasswordState(e.target.value)} ico={passwordIco} type="password" placeholder="Hasło" />
                <PasswordOptions>
                    <Label>
                        <Checkbox onChange={(e)=>setRememberMeState(e.target.checked)} checked={rememberMeState} />
                        {" "}Pamiętaj mnie
                    </Label>
                    <Link to="/auth/password">Zapomniałeś hasła?</Link>
                </PasswordOptions>
                <ButtonsWrapper>
                    <Button>Zaloguj się</Button>
                    <Separator style={{margin:"15px 0"}}>lub</Separator>
                    <StyledLink to="/auth/register">
                        <Button type="button" isSecond>Zarejestruj się</Button>
                    </StyledLink>
                </ButtonsWrapper>
            </Form>
        </Layout>
     );
}

const Register = () => {
    const [usernameState, setUsernameState]=useState("");
    const [emailState, setEmailState]=useState("");
    const [passwordState, setPasswordState]=useState("");
    return ( 
        <Layout>
            <Banner>
                <MainTitle style={{padding:'0 var(--margin)'}}>Stwórz nowe <br /> konto.</MainTitle>
            </Banner>
            <WaveEnd waveImg={loginWave} />
            <Form>
                <Input value={usernameState} onChange={e=>setUsernameState(e.target.value)} ico={userIco} placeholder="Nazwa użytkownika" />
                <Input value={emailState} onChange={e=>setEmailState(e.target.value)} ico={emailIco} placeholder="Email" />
                <Input value={passwordState} onChange={e=>setPasswordState(e.target.value)} ico={passwordIco} type="password" placeholder="Hasło" />
                <ButtonsWrapper>
                    <Button>Zarejestruj się</Button>
                    <Separator style={{margin:"15px 0"}}>lub</Separator>
                    <StyledLink to="/auth/login">
                        <Button type="button" isSecond>Zaloguj się</Button>
                    </StyledLink>
                </ButtonsWrapper>
            </Form>
        </Layout>
     );
}
 
export {Login, Register};