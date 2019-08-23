import React, { Component } from 'react';

import Section from './styles';

import GlobalStyle from 'styles/Global';
import { hasUrlParams, getRepositoryName } from 'services/UrlParams';
import { hasLocalStorage, filterLocalStorage } from 'services/LocalStorage';
import { getIssues } from 'services/GithubAPI';
import { LoadingSpinner, Redirect, CardIssue } from 'components';

export default class Repository extends Component {
    state = {
        hasUrlParams: hasUrlParams(this.props.location.search),
        hasLocalStorage: hasLocalStorage(),
        repositoryName: getRepositoryName(),
        repository: {},
        repositoryIssues: [],
        loading: false,
        errorAPI: false,
        errorAPIMsg: '',
    };

    // LIFE CYCLE
    componentDidMount() {
        if (this.state.hasUrlParams && this.state.hasLocalStorage) {
            this.setState({ loading: true }, () => {
                this.handleCallAPI();
            });
        }
    }

    // METHODS
    handleCallAPI = async () => {
        try {
            const response = await getIssues(this.state.repositoryName);
            const { data } = response;

            this.setState({
                loading: false,
                repository: [filterLocalStorage(this.state.repositoryName)],
                repositoryIssues: [...data],
            });
        } catch (error) {
            const { message, response } = error;

            // prettier-ignore
            this.handleError(response !== undefined ? response.data : message);
        }
    };

    handleError = message => {
        this.setState({
            loading: false,
            errorAPI: true,
            errorAPIMsg: message,
        });
    };

    hasRepository = () => {
        return this.state.repository.length !== 0 &&
            this.state.repositoryIssues.length !== 0
            ? true
            : false;
    };

    render() {
        return this.state.hasUrlParams && this.state.hasLocalStorage ? (
            <>
                <GlobalStyle />
                <Section>
                    {this.state.loading && (
                        <LoadingSpinner size={30} theme="light" />
                    )}

                    {this.hasRepository() && (
                        <CardIssue
                            repositoryData={this.state.repository[0]}
                            issuesData={this.state.repositoryIssues}
                        />
                    )}
                </Section>
            </>
        ) : (
            <Redirect to="/home" />
        );
    }
}
