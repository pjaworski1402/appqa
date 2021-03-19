import React from 'react';
import styled from 'styled-components';

import Option from '../../components/actionOption/Option'

const ActionsWrapper = styled.section`
  width: 80%;
  padding: 20px 10px;
  background-color: var(--main-bright);
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,.2);
  margin: -40px auto 0 auto;
`;

const Tabs = styled.div`
  width:100%;
  padding: 10px 15px;
  display:flex;
  justify-content:space-between;
`;

const Tab = styled.button`
  font-size:var(--normal-font);
  padding: 10px;
  border-bottom: 1.5px solid ${({current})=>current?"var(--main-dark)":"var(--main-bright)"};
`;

const ActionName = styled.div`
    font-size: var(--normal-font);
    font-weight: var(--Bold);
    color: var(--main-dark);
    opacity: 0.4;
    margin: 20px 0;
`

const Actions = () => {
    return ( 
        <ActionsWrapper>
            <Tabs>
                <Tab current>Działania</Tab>
                <Tab>Kryptowaluty</Tab>
            </Tabs>
            <ActionName>Reklamy</ActionName>
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
            <Option />
        </ActionsWrapper>
     );
}
 
export default Actions;