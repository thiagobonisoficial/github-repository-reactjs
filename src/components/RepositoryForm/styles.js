import styled from 'styled-components';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

export const Form = styled.form`
    width: auto;
    height: auto;
    display: flex;
    margin: 1rem 0 0 0;
`;

export const FormGroup = styled.div`
    display: flex;
    flex: 1;

    ${Breakpoints.xs`
        width: 100%;
        flex-direction: column-reverse;
        position: fixed;
        bottom: 0;
        margin: 0 0 3rem 0;
        background-color: ${Colors.purples.light2};
    `}

    ${Breakpoints.xl`
        width: initial;
        flex-direction: column;
        position: relative;
        margin: 0;
        background-color: transparent;
    `}
`;

export const Description = styled.small`
    margin: 0.5rem 0 0 0.3rem;
    color: ${Colors.greys.dark1};

    ${Breakpoints.xs`display: none;`}
    ${Breakpoints.xl`display: block;`}
`;
