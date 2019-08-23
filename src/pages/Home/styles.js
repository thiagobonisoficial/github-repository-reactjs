import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';

const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;

    ${Breakpoints.xs`
        height: auto;
        margin: 0;
    `}

    ${Breakpoints.xl`
        height: 100vh;
        align-items: center;
    `}
`;

export default Section;
