import styled from 'styled-components';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

const Button = styled.button`
    height: 3rem;
    color: white;
    background-color: ${Colors.purples.light2};
    border: none;

    &:disabled {
        background-color: ${Colors.greys.light2};
    }

    svg {
        vertical-align: middle;
    }

    ${Breakpoints.xs`
        width: 100%;
        position: fixed;
        bottom: 0;
        border-radius: 0;
    `}

    ${Breakpoints.xl`
        width: 3rem;
        position: relative;
        border-radius: 4px;
    `}
`;

export default Button;
