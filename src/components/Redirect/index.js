import React from 'react';
import PropTypes from 'prop-types';
import { Redirect as Redir } from 'react-router-dom';

function Redirect({ to }) {
    return <Redir to={to} />;
}

Redirect.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Redirect;
