import React from 'react';
import styled from 'styled-components';

import arrowRight from '../../assets/icons/arrowRight.svg'
import nike from '../../assets/icons/placeholderNike.png'

const OptionWrapper = styled.button`
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 5px;
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:95%;
    margin:0 auto 30px auto;
`;

const Arrow = styled.img`
  width:11px;
`;

const Icon = styled.img`
    width:45px;
`

const InfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    margin:0 15px;
`

const Name = styled.span`
    font-size:var(--normal-font);
    font-weight: var(--Medium);
`;

const Describe = styled.span`
    font-weight: var(--Medium);
`;

const Price = styled.span`
    font-weight: var(--Medium);
    margin: 0 15px;
`;

const Unnamed = styled.div`
display:flex;
`

const Option = () => {
    return ( 
        <OptionWrapper>
            <Unnamed>
                <Icon src={nike} />
                <InfoWrapper>
                    <Name>nike.com</Name>
                    <Describe>reklama</Describe>
                </InfoWrapper>
            </Unnamed>
            <Unnamed>
            <Price>0,12 zł</Price>
            <Arrow src={arrowRight} />
            </Unnamed>
        </OptionWrapper>
     );
}
 
export default Option;