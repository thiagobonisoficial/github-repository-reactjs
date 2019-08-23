import styled from 'styled-components';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

const Input = styled.input`
    width: auto;
    height: 3rem;
    padding: 1rem;
    font-size: 1rem;
    border: ${({ error }) =>
        error ? '1px solid red' : `1px solid ${Colors.greys.light1}`};

    &:focus {
        border-color: ${({ error }) =>
            error ? 'red' : `${Colors.purples.light2}`};
    }

    &:disabled {
        border-color: ${Colors.greys.light2};
        color: ${Colors.greys.light2};
    }

    ${Breakpoints.xs`
        margin: 0;
        border-radius: 0;
        border-right: none;
        border-left: none;
    `}

    ${Breakpoints.xl`
        margin: 0 0.5rem 0 0;
        border: ${({ error }) =>
            error ? '1px solid red' : `1px solid ${Colors.greys.light1}`};
        border-radius: 4px;
    `}
`;

export default Input;
