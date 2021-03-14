import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'

import Logo from '../../components/logo/Logo'
import MenuIco from '../../assets/icons/menu.svg'

const TopNavWrapper = styled.nav`
    border-bottom: 1px solid var(--main-dark);
    padding: 15px var(--margin);
    display:flex;
    justify-content: ${({onlyLogo})=>onlyLogo?"center":"space-between"};
    position: sticky;
    top:0;
    width:100%;
    background-color: var(--main-bright);
    z-index:10;
`;

const Menu = styled.button`
    padding: 3px;
`

const TopNav = () => {
    const location = useLocation();
    const onlyLogo = location.pathname.includes("auth")
    return ( 
        <TopNavWrapper onlyLogo={onlyLogo}>
            <Logo />
            {onlyLogo?null:(
                <Menu>
                    <img alt="Menu" src={MenuIco} />
                </Menu>
            )}
        </TopNavWrapper>
     );
}
 
export default TopNav;