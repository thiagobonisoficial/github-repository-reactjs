import React from 'react';
import PropTypes from 'prop-types';

import List from './styles';
import { Issue } from 'components';

function IssueList({ data }) {
    return (
        <List>
            {data.map(({ id, title, labels, user }) => {
                return (
                    <Issue key={id} title={title} labels={labels} user={user} />
                );
            })}
        </List>
    );
}

IssueList.propTypes = {
    data: PropTypes.array.isRequired,
};

export default IssueList;
