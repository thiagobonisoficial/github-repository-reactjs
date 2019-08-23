import React from 'react';
import PropTypes from 'prop-types';

import Button from './styles';
import { FaPlus } from 'react-icons/fa';
import { LoadingSpinner } from 'components';

function SubmitButton({ loading, disabled }) {
    return (
        <Button type="submit" disabled={disabled}>
            {loading ? <LoadingSpinner /> : <FaPlus size={15} />}
        </Button>
    );
}

SubmitButton.protoTypes = {
    loading: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default SubmitButton;
