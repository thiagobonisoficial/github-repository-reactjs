import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';

const List = styled.ul`
    height: 32vh;
    overflow-y: auto;

    ${Breakpoints.xs`padding: 0 0.8rem 0 0;`}
    ${Breakpoints.xl`padding: 0 0.3rem 0 0;`}
`;

export default List;
