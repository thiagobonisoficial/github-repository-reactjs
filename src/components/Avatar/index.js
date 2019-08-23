import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Img from './styles';
import Themes from './themes';

function Avatar({ src, alt, theme, margin }) {
    return (
        <ThemeProvider theme={Themes[theme]}>
            <Img src={src} alt={alt} margin={margin} />
        </ThemeProvider>
    );
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    margin: PropTypes.string,
};

export default Avatar;
