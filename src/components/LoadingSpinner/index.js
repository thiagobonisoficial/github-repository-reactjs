import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Container from './styles';
import Themes from './themes';

import { FaSpinner } from 'react-icons/fa';

function LoadingSpinner({ size, theme }) {
    return (
        <ThemeProvider theme={Themes[theme]}>
            <Container>
                <FaSpinner size={size} />
            </Container>
        </ThemeProvider>
    );
}

LoadingSpinner.defaultProps = {
    theme: 'dark',
    size: 15,
};

LoadingSpinner.propTypes = {
    size: PropTypes.number,
    theme: PropTypes.string,
};

export default LoadingSpinner;
