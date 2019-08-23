import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';
import Colors from './Colors';
import Breakpoints from './Breakpoints';

const GlobalStyle = createGlobalStyle`
    ${Reset}

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        color: ${Colors.greys.dark2};
        -webkit-font-smoothing: antialiased !important;

        ${Breakpoints.xs`background-color: white;`}
        ${Breakpoints.xl`background-color: ${Colors.purples.light1};`}
    }
`;

export default GlobalStyle;
