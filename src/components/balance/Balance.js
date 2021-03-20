import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux"

const BalanceWrapper = styled.div`
  color: var(--main-bright);
  font-size: var(--title-font);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.span`
  color: inherit;
  font-size:var(--small-font);
`

const Amount = styled.span`
  color: inherit;
  font-weight: var(--Bold);
`;

const Balance = (props) => {
  const balance = useSelector(state=>state.user.balance)
    return ( 
        <BalanceWrapper {...props}>
            <Text>saldo{" "}</Text>
            <Amount>{balance} zł</Amount>
        </BalanceWrapper>
     );
}
 
export {Balance};