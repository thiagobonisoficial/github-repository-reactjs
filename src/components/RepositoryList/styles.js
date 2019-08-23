import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';

const List = styled.ul`
    width: auto;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    ${Breakpoints.xs`
        height: 100vh;
        margin: 0;
        padding: 2.5rem 0 7rem 0;
    `}

    ${Breakpoints.xl`
        height: 40vh;
        margin: 1.5rem 0 0 0;
        padding: 0;
    `}
`;

export default List;
