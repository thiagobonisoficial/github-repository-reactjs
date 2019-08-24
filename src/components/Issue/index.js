import React from 'react';
import PropTypes from 'prop-types';

import {
    Item,
    Container,
    OwnerContainer,
    BadgesContainer,
    Title,
    Username,
} from './styles';
import { Avatar, LabelList } from 'components';

function Issue({ title, labels, user: { avatar_url, login } }) {
    return (
        <>
            <Item>
                <div>
                    <Avatar
                        src={avatar_url}
                        alt={`${login} AVATAR`}
                        theme="large"
                        margin="0 0 0 .5rem"
                    />
                </div>

                <Container>
                    <OwnerContainer>
                        <Title>{title}</Title>
                        <Username>{login}</Username>
                    </OwnerContainer>
                    <BadgesContainer>
                        <LabelList data={labels} />
                    </BadgesContainer>
                </Container>
            </Item>
        </>
    );
}

Issue.propTypes = {
    title: PropTypes.string.isRequired,
    labels: PropTypes.array.isRequired,
    user: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
    }).isRequired,
};

export default Issue;
