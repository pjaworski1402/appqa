import React from 'react';
import styled from 'styled-components';

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
    return ( 
        <BalanceWrapper {...props}>
            <Text>saldo{" "}</Text>
            <Amount>21.55 zł</Amount>
        </BalanceWrapper>
     );
}
 
export {Balance};