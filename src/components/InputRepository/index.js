import React from 'react';
import PropTypes from 'prop-types';

import Input from './styles';

function InputRepository({ onChange, value, disabled, error }) {
    return (
        <Input
            type="text"
            placeholder="Add repository"
            onChange={onChange}
            value={value}
            disabled={disabled}
            error={error}
            autoFocus
            required
        />
    );
}

InputRepository.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
};

export default InputRepository;
