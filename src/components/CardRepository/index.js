import React from 'react';

import {
    Card,
    RepositoryHeader,
    RepositoryForm,
    RepositoryList,
} from 'components';

export default function CardRepository() {
    return (
        <Card>
            <RepositoryHeader />
            <RepositoryForm />
            <RepositoryList />
        </Card>
    );
}
