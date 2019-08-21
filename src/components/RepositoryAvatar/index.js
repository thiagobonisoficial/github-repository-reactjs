import React from 'react';
import PropTypes from 'prop-types';

import Img from './styles';

function RepositoryAvatar({ src, alt }) {
    return <Img src={src} alt={alt} />;
}

RepositoryAvatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default RepositoryAvatar;
