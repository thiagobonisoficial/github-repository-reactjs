import React, { Component } from 'react';

import {
    hasLocalStorage,
    hasRepository,
    getRepositories,
    setRepositories,
} from 'services/LocalStorage';
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
        hasLocalStorage: hasLocalStorage(),
        loading: false,
        errorAPI: false,
        errorAPIMsg: '',
        repositoryList: [],
    };

    // LIFE CYCLE
    componentDidMount() {
        if (this.state.hasLocalStorage) {
            this.setState({ repositoryList: getRepositories() });
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.repositoryList !== this.state.repositoryList) {
            setRepositories(this.state.repositoryList);
        }
    }

    // METHODS
    handleOnChange = e => {
        this.setState({ inputValue: e.target.value }, () => {
            this.state.inputValue !== ''
                ? this.setState({ btnIsDisabled: false })
                : this.setState({ btnIsDisabled: true });
        });
    };

    handleOnSubmit = e => {
        e.preventDefault();

        // prettier-ignore
        this.setState({
            inputIsDisabled: true,
            btnIsDisabled: true,
            loading: true,
        }, () => {
           hasRepository(this.state.inputValue)
           ? this.handleError( 'A repository corresponding to this already exists.')
           : this.callAPI();
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

    callAPI = async () => {
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

            this.handleError(response !== undefined ? response.data : message);
        }
    };

    render() {
        return (
            <Card>
                <RepositoryHeader />
                <RepositoryForm
                    onChange={this.handleOnChange}
                    onSubmit={this.handleOnSubmit}
                    inputValue={this.state.inputValue}
                    inputIsDisabled={this.state.inputIsDisabled}
                    btnIsDisabled={this.state.btnIsDisabled}
                    loading={this.state.loading}
                    errorAPI={this.state.errorAPI}
                />

                {this.state.repositoryList && (
                    <RepositoryList data={this.state.repositoryList} />
                )}
            </Card>
        );
    }
}
