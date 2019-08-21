import React from 'react';

import Header from './styles';
import { GoMarkGithub } from 'react-icons/go';

export default function RepositoryHeader() {
    return (
        <Header>
            <GoMarkGithub size={30} />
            Repositories
        </Header>
    );
}
