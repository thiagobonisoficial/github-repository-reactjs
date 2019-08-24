import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

export const Section = styled.section`
    width: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const Img = styled.img`
    height: auto;

    ${Breakpoints.xs`width: 80%;`}
    ${Breakpoints.md`width: 40%;`}
`;

export const Hyperlink = styled(NavLink)`
    margin: 2rem 0 0 0;
    padding: 1rem;
    font-weight: bold;
    color: white;
    background-color: ${Colors.purples.light1};
    border-radius: 4px;
`;
