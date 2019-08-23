import React from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, Description } from './styles';
import { InputRepository, SubmitButton } from 'components';

function RepositoryForm({
    onChange,
    onSubmit,
    inputValue,
    inputIsDisabled,
    loading,
    btnIsDisabled,
    errorAPI,
}) {
    return (
        <Form onSubmit={onSubmit} noValidate>
            <FormGroup>
                <InputRepository
                    onChange={onChange}
                    value={inputValue}
                    disabled={inputIsDisabled}
                    error={errorAPI}
                />
                <Description>Example: facebook/react</Description>
            </FormGroup>

            <SubmitButton loading={loading} disabled={btnIsDisabled} />
        </Form>
    );
}

RepositoryForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    inputIsDisabled: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    btnIsDisabled: PropTypes.bool.isRequired,
    errorAPI: PropTypes.bool.isRequired,
};

export default RepositoryForm;
