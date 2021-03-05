import styled from 'styled-components';

const Separator = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    &::before, &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid gray;
    }
    &:not(:empty)::before {
        margin-right: .25em;
    }

    &:not(:empty)::after {
        margin-left: .25em;
    }
`
export default Separator;