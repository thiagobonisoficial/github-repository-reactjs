import React from 'react';
import PropTypes from 'prop-types';

import { Header, Hyperlink, Description } from './styles';
import { Avatar } from 'components';

function IssueHeader({ avatar, name, description }) {
    return (
        <Header>
            <Hyperlink to="/home">Voltar aos repositórios</Hyperlink>
            <Avatar
                src={avatar}
                alt={`${name} AVATAR`}
                theme="large"
                margin="1rem"
            />
            <h3>{name}</h3>
            <Description>{description}</Description>
        </Header>
    );
}

IssueHeader.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default IssueHeader;
