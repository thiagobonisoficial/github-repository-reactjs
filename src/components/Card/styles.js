import styled from 'styled-components';

import Breakpoints from 'styles/Breakpoints';

const Container = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    ${Breakpoints.xs`width: 90%;`}
    ${Breakpoints.xl`width: 50%;`}
    ${Breakpoints.ultraHD`width: 30%;`}
`;

export default Container;
