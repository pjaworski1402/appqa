import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size:20px;
    color: ${({isSecond})=>isSecond?'gray':'var(--main-bright)'};
    background-color: ${({isSecond})=>isSecond?'var(--main-bright)':'var(--main-dark)'};
    padding: 20px 30px;
    border-radius: 15px;
    border: ${({isSecond})=>isSecond?'1px solid gray':'none'};
`

const Button = (props) => {
    return ( 
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
     );
}
 
export default Button;