import React, { Component } from 'react';

import Container from './styles';

import { Repository } from 'components';

export default class RepositoryList extends Component {
    state = {
        scroll: false,
        repositoryData: [
            {
                owner: 'facebook',
                repository: 'react',
                src: 'https://avatars3.githubusercontent.com/u/69631?v=4',
                alt: 'facebook/react',
            },
            {
                owner: 'facebook2',
                repository: 'react',
                src: 'https://avatars3.githubusercontent.com/u/69631?v=4',
                alt: 'facebook/react',
            },
            {
                owner: 'facebook3',
                repository: 'react',
                src: 'https://avatars3.githubusercontent.com/u/69631?v=4',
                alt: 'facebook/react',
            },
            {
                owner: 'facebook4',
                repository: 'react',
                src: 'https://avatars3.githubusercontent.com/u/69631?v=4',
                alt: 'facebook/react',
            },
        ],
    };

    render() {
        return (
            <Container scroll={this.state.scroll}>
                {this.state.repositoryData.map(
                    ({ owner, repository, src, alt }) => {
                        return (
                            <Repository
                                key={`${owner}/${repository}`}
                                owner={owner}
                                repository={repository}
                                src={src}
                                alt={alt}
                            />
                        );
                    }
                )}
            </Container>
        );
    }
}
