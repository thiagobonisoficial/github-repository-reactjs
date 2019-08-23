import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

export const Header = styled.header`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 1rem 0;
    border-bottom: 1px ${Colors.greys.light1} solid;
`;

export const Hyperlink = styled(NavLink)``;

export const Description = styled.span`
    line-height: 1.5rem;
    margin: 1rem 1rem 0 1rem;

    ${Breakpoints.xs`text-align: justify;`}
    ${Breakpoints.xl`text-align: center;`}
`;
