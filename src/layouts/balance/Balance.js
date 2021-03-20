import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux"

import {Title} from '../../components/title/Title';
import WaveEnd from '../../components/waveEnd/WaveEnd'

import balanceWave from '../../assets/images/balanceWave.png'
import balanceBlob from '../../assets/images/balanceBlob.svg'
import {Balance as BalanceComponent} from "../../components/balance/Balance"

const BalanceWrapper = styled.section`
  height:40vh;
  background-color: var(--main-dark);
  background-image: url(${balanceBlob});
  background-repeat: no-repeat;
  background-size: 110%;
  background-position:center;
  position:relative;
`;

const Balance = () => {
  const username = useSelector(state=>state.user.username)
    return ( 
    <>
    <BalanceWrapper>
        <Title style={{color:"var(--main-bright)", padding:"35px 25px", fontWeight:"var(--Regular)"}}>Witaj {username}</Title>
        <BalanceComponent />
    </BalanceWrapper> 
    <WaveEnd waveImg={balanceWave} />
    </>
    );
}
 
export default Balance;