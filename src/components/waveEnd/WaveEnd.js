import React from 'react';
import styled from 'styled-components';

const HeroEnd = styled.div`
    width: 100%;
    height: 100px;
    background-color: transparent;
    background-image: url(${({wave})=>wave});
    background-repeat:no-repeat;
    background-size: 100% 100px;
    background-position: top -1px left 0;
    margin-top:-1px;
    z-index:-1;
    position:relative;
`

const WaveEnd = ({waveImg}) => {
    return ( 
        <HeroEnd wave={waveImg} />
     );
}
 
export default WaveEnd;