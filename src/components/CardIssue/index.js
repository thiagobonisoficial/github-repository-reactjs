import React from 'react';

import { Card, IssueHeader, IssueList } from 'components';

export default function CardRepository() {
    return (
        <Card>
            <IssueHeader />
            <IssueList />
        </Card>
    );
}
