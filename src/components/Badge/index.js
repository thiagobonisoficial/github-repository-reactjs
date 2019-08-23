import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Span from './styles';
import Themes from './themes';

function Badge({ theme, children, margin }) {
    return (
        <ThemeProvider theme={Themes[theme]}>
            <Span margin={margin}>{children}</Span>
        </ThemeProvider>
    );
}

Badge.propTypes = {
    theme: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    margin: PropTypes.string,
};

export default Badge;
