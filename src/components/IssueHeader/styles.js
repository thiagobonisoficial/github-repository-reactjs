import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

export const Header = styled.header`
    height: auto;
    display: flex;
    align-items: center;
    padding: 0 0 1rem 0;
    border-bottom: 1px ${Colors.greys.light1} solid;

    ${Breakpoints.xs`
        width: 100%;
        position: fixed;
        top: 0;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: ${Colors.purples.light1};
    `}

    ${Breakpoints.md`
        flex-direction: column;
        flex-wrap: nowrap;
    `}

    ${Breakpoints.xl`
        width: auto;
        position: initial;
        background-color: initial;
    `}


    img {
        ${Breakpoints.xs`
            width: 3rem;
            height: 3rem;
        `}

        ${Breakpoints.md`
            width: 4rem;
            height: 4rem;
        `}
    }
`;

export const Hyperlink = styled(NavLink)`
    ${Breakpoints.xs`
        width: 100%;
        position: fixed;
        bottom: 0;
        padding: 1rem;
        text-align: center;
        color: white;
        background-color: ${Colors.purples.light1};
    `}

    ${Breakpoints.xl`
        width: initial;
        position: initial;
        padding: initial;
        color: ${Colors.purples.light1};
        background-color: initial;
    `}
`;

export const Title = styled.h3`
    ${Breakpoints.xs`color: white;`}
    ${Breakpoints.xl`color: initial;`}
`;

export const Description = styled.span`
    line-height: 1.5rem;

    ${Breakpoints.xs`
        margin: .2rem 1.5rem 0 1.5rem;
        color: white
        text-align: justify;
    `}

    ${Breakpoints.xl`
        margin: 1rem 1rem 0 1rem;
        color: initial;
        text-align: center;
    `}
`;
