import styled, { css } from 'styled-components';

const StyledTitle = css`
    font-weight: var(--Medium);
    font-size: var(--title-font);
    line-height: 45px;
    letter-spacing: 2px;
    @media (min-width: 920px) { 
        line-height: 65px;
    }
`;

const MainTitle = styled.h1`${StyledTitle}`;

const Title = styled.h2`${StyledTitle}`;
 
export {Title, MainTitle};