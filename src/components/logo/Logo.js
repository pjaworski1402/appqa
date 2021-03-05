import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const LogoWrapper = styled.div`
  font-size: var(--normal-bigger-font);
  font-weight:900;
`;
const DarkPart = styled.span`
  color: var(--main-dark);
`;

const BrightPart = styled.span`
  color: var(--accent-dark);
`;

const Logo = () => {
    return ( 
      <Link to="/" style={{textDecoration:"none"}}>
        <LogoWrapper>
            <BrightPart>app</BrightPart><DarkPart>QA.</DarkPart>
        </LogoWrapper>
        </Link>
     );
}
 
export default Logo;