import styled from 'styled-components';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

const Container = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;

    ${Breakpoints.xs`
        width: 100%;
        padding: 0;
        border-radius: 0;
        box-shadow: none;

    `}

    ${Breakpoints.xl`
        width: 50%;
        padding: 2rem;
        border-radius: 4px;
        box-shadow: 0 0 20px ${Colors.blacks.transparent};
    `}

    ${Breakpoints.ultraHD`width: 30%;`}
`;

export default Container;
