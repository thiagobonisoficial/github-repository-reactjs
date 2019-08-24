import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';

const List = styled.ul`
    overflow-y: auto;

    ${Breakpoints.xs`
        height: 100vh;
        padding: 9rem .3rem 3rem .3rem;
    `}

    ${Breakpoints.md`padding: 10rem .3rem 3rem .3rem;`}

    ${Breakpoints.xl`
        height: 35vh;
        padding: 0 .3rem 0 .3rem;
    `}
`;

export default List;
