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

Badge.defaultProps = {
    theme: 'light',
};

Badge.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.string.isRequired,
    margin: PropTypes.string,
};

export default Badge;
