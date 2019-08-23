import React, { Component } from 'react';

import { getRepository } from 'services/GithubAPI';

import {
    Card,
    RepositoryHeader,
    RepositoryForm,
    RepositoryList,
} from 'components';

export default class CardRepository extends Component {
    state = {
        inputValue: '',
        inputIsDisabled: false,
        btnIsDisabled: true,
        loading: false,
        errorAPI: false,
        errorAPIMsg: '',
        repositoryList: [],
    };

    // LIFE CYCLE
    componentDidMount() {
        const repositories = JSON.parse(localStorage.getItem('repositories'));

        if (repositories) {
            this.setState({ repositoryList: repositories });
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.repositoryList !== this.state.repositoryList) {
            // prettier-ignore
            localStorage.setItem('repositories', JSON.stringify(this.state.repositoryList));
        }
    }

    // METHODS
    onChange = e => {
        this.setState({ inputValue: e.target.value }, () => {
            this.state.inputValue !== ''
                ? this.setState({ btnIsDisabled: false })
                : this.setState({ btnIsDisabled: true });
        });
    };

    onSubmit = e => {
        e.preventDefault();

        this.handleStartSubmit();

        // prettier-ignore
        this.hasEqualRepository(this.state.inputValue)
            ? this.handleError('A repository corresponding to this already exists.')
            : this.handleCallAPI();
    };

    handleCallAPI = async () => {
        try {
            const response = await getRepository(this.state.inputValue);
            const { data } = response;

            this.setState({
                inputValue: '',
                inputIsDisabled: false,
                btnIsDisabled: false,
                loading: false,
                errorAPI: false,
                repositoryList: [...this.state.repositoryList, data],
            });
        } catch (error) {
            const { message, response } = error;

            // prettier-ignore
            this.handleError(response !== undefined ? response.data : message);
        }
    };

    handleStartSubmit = () => {
        this.setState({
            inputIsDisabled: true,
            btnIsDisabled: true,
            loading: true,
        });
    };

    handleError = message => {
        this.setState({
            inputIsDisabled: false,
            btnIsDisabled: false,
            loading: false,
            errorAPI: true,
            errorAPIMsg: message,
        });
    };

    hasEqualRepository = repositoryId => {
        const repositories = JSON.parse(localStorage.getItem('repositories'));

        if (repositories.length === 0) {
            return false;
        } else {
            let bool = false;

            repositories.forEach(({ full_name }) => {
                if (repositoryId === full_name) {
                    bool = true;
                }
            });

            return bool;
        }
    };

    render() {
        return (
            <Card>
                <RepositoryHeader />
                <RepositoryForm
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    inputValue={this.state.inputValue}
                    inputIsDisabled={this.state.inputIsDisabled}
                    btnIsDisabled={this.state.btnIsDisabled}
                    loading={this.state.loading}
                    errorAPI={this.state.errorAPI}
                />
                <RepositoryList data={this.state.repositoryList} />
            </Card>
        );
    }
}
