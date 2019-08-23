import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px ${Colors.greys.light2} solid;

    &:last-child {
        border: none;
    }
`;

export const InformationContainer = styled.div`
    margin: 0 0.7rem 0 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${Breakpoints.xs`width: 72%;`}
    ${Breakpoints.xl`flex: 1;`}
`;

export const NavLinkContainer = styled.div`
    flex: 1;
    text-align: center;

    ${Breakpoints.xl`
        flex: 0;
        margin: 0 .3rem 0 0;
    `}
`;

export const Title = styled.span`
    margin: 0 0 0 0.6rem;
    font-weight: bolder;
`;

export const Hyperlink = styled(NavLink)`
    color: ${Colors.purples.light1};

    &:hover {
        color: ${Colors.purples.light2};
    }

    &:visited {
        color: ${Colors.purples.light1};
    }
`;
