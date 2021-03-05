import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    border-bottom: 2px solid var(--accent-bright);
    display: flex;
    justify-content:center;
`;

const Icon = styled.img`
  width:20px;
  margin: 0 5px;
`;

const StyledInput = styled.input`
    margin: 5px 10px;
    width:100%;
    font-size: var(--normal-font);
    background-color: transparent;
`;

const Input = (props) => {
    return ( 
        <InputWrapper>
            <Icon alt="" src={props.ico} />
            <StyledInput {...props} />
        </InputWrapper>
     );
}
 
export default Input;