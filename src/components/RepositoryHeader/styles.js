import styled from 'styled-components';

import Colors from 'styles/Colors';
import Breakpoints from 'styles/Breakpoints';

const Header = styled.header`
    height: auto;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bolder;

    svg {
        margin: 0 1rem 0 0;
    }

    ${Breakpoints.xs`
        width: 100%;
        justify-content: center;
        position: fixed;
        top: 0;
        padding: 0.8rem;
        color: white;
        background-color: ${Colors.purples.light2};
    `}

    ${Breakpoints.xl`
        width: auto;
        justify-content: flex-start;
        position: relative;
        color: initial;
        background-color: initial;
    `}
`;

export default Header;
