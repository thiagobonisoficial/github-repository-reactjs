import React from 'react';
import PropTypes from 'prop-types';

import { Card, IssueHeader, IssueList } from 'components';

function CardIssue({
    repositoryData: {
        name,
        description,
        owner: { avatar_url },
    },
    issuesData,
}) {
    return (
        <Card>
            <IssueHeader
                avatar={avatar_url}
                name={name}
                description={description}
            />
            <IssueList data={issuesData} />
        </Card>
    );
}

CardIssue.propTypes = {
    repositoryData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        owner: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    issuesData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CardIssue;
