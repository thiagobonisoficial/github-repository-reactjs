import React, { Component } from 'react';

import List from './styles';
import { Issue } from 'components';

class IssueList extends Component {
    state = {
        issues: [],
    };

    render() {
        return (
            <List>
                {/* {this.state.repositoryIssues.map({})} */}
                <Issue />
            </List>
        );
    }
}

export default IssueList;
