import React from 'react';
import PropTypes from 'prop-types';

import List from './styles';
import { Repository } from 'components';

function RepositoryList({ data }) {
    return (
        <List>
            {data.map(({ full_name, name, owner: { avatar_url, login } }) => {
                return (
                    <Repository
                        key={full_name}
                        full_name={full_name}
                        owner={login}
                        repository={name}
                        avatar={avatar_url}
                    />
                );
            })}
        </List>
    );
}

RepositoryList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            full_name: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            owner: PropTypes.shape({
                avatar_url: PropTypes.string.isRequired,
                login: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default RepositoryList;
