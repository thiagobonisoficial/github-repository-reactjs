import styled from 'styled-components';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

export const Item = styled.li`
    margin: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
    border: 1px ${Colors.greys.light1} solid;

    ${Breakpoints.xs`
        flex-direction: column;
        padding: 0.5rem;
    `}

    ${Breakpoints.md`
        flex-direction: row;
        padding: 1rem;
    `}
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const OwnerContainer = styled.div`
    width: 30rem;
    display: flex;
    margin: 0 0 0 1rem;

    ${Breakpoints.xs`
        flex-direction: column-reverse;
        text-align: center;
    `}

    ${Breakpoints.md`flex-direction: row;`}
`;

export const BadgesContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ${Breakpoints.xs`
        justify-content: center;
        margin: .5rem 0 .5rem 0;
    `}

    ${Breakpoints.md`
        justify-content: flex-start;
        margin: 0.4rem 0 0 0.71rem;
    `}
`;

export const Title = styled.h4`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
export const Username = styled.small`
    ${Breakpoints.xs`margin: .5rem 0 .5rem 0;`}
    ${Breakpoints.md`margin: 0.08rem 0 0 0.6rem;`}
`;
