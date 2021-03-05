import styled from 'styled-components';

const Paragraph = styled.p`
    font-weight: var(--Medium);
    font-size: var(--normal-font);
    line-height: 25px;
    @media (min-width: 920px) { 
        letter-spacing: .5px;
        line-height: 40px;
     }
`

export {Paragraph}