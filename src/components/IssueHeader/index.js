import React from 'react';
import PropTypes from 'prop-types';

import { Header, Hyperlink, Title, Description } from './styles';
import { Avatar } from 'components';

function IssueHeader({ avatar, name, description }) {
    return (
        <Header>
            <Hyperlink to="/home">Back to repositories</Hyperlink>
            <Avatar
                src={avatar}
                alt={`${name} AVATAR`}
                theme="large"
                margin="1rem"
            />
            <Title>{name}</Title>
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
