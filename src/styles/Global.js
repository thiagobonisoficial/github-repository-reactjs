import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';

const GlobalStyle = createGlobalStyle`
    ${Reset}

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        background-color: #684EBC;
        color: #2E2D2F;
        -webkit-font-smoothing: antialiased !important;
    }
`;

export default GlobalStyle;
