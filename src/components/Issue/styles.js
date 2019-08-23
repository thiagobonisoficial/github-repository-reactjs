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

export const InformationContainer = styled.div`
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
    margin: 0.4rem 0 0 0.71rem;

    ${Breakpoints.xs`justify-content: center;`}
    ${Breakpoints.md`justify-content: flex-start;`}
`;

export const Username = styled.small`
    margin: 0.08rem 0 0 0.6rem;
`;
