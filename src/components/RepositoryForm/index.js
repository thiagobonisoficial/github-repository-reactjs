import React, { Component } from 'react';

import { Form, InputRepository, SubmitButton } from './styles';
import { FaPlus } from 'react-icons/fa';

export default class RepositoryForm extends Component {
    state = {
        inputValue: '',
        inputIsDisabled: false,
        btnIsDisabled: true,
    };

    onChange = e => {
        this.setState({ inputValue: e.target.value }, () => {
            this.state.inputValue !== ''
                ? this.setState({ btnIsDisabled: false })
                : this.setState({ btnIsDisabled: true });
        });
    };

    onSubmit = e => {
        e.preventDefault();
    };

    onClick = () => {
        this.setState({
            btnIsDisabled: true,
            inputIsDisabled: true,
        });
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} noValidate>
                <InputRepository
                    type="text"
                    placeholder="Add repository, example: facebook/react"
                    onChange={this.onChange}
                    maxLength={20}
                    disabled={this.state.inputIsDisabled}
                    autoFocus
                    required
                />
                <SubmitButton
                    type="submit"
                    onClick={this.onClick}
                    disabled={this.state.btnIsDisabled}
                >
                    <FaPlus size={15} />
                </SubmitButton>
            </Form>
        );
    }
}
