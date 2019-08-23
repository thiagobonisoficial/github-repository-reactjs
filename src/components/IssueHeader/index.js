import React from 'react';
import PropTypes from 'prop-types';

import { Header, Hyperlink, Description } from './styles';
import { Avatar } from 'components';

function IssueHeader({
    repositoryAvatar,
    repositoryName,
    repositoryDescription,
}) {
    return (
        <Header>
            <Hyperlink to="/home">Voltar aos repositórios</Hyperlink>
            <Avatar
                src={repositoryAvatar}
                alt={`${repositoryName} AVATAR`}
                theme="large"
                margin="1rem"
            />
            <h3>{repositoryName}</h3>
            <Description>{repositoryDescription}</Description>
        </Header>
    );
}

IssueHeader.propTypes = {
    repositoryAvatar: PropTypes.string.isRequired,
    repositoryName: PropTypes.string.isRequired,
    repositoryDescription: PropTypes.string.isRequired,
};

export default IssueHeader;
