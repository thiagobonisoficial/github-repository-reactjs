import React from 'react';
import PropTypes from 'prop-types';

import {
    Item,
    Container,
    InformationContainer,
    BadgesContainer,
    Username,
} from './styles';
import { Avatar, LabelList } from 'components';

function Issue({ title, labels, user: { avatar_url, login } }) {
    return (
        <>
            <Item>
                <Avatar
                    src={avatar_url}
                    alt={`${login} AVATAR`}
                    theme="small"
                    margin="0 0 0 1.5rem"
                />

                <Container>
                    <InformationContainer>
                        <h4>{title}</h4>
                        <Username>{login}</Username>
                    </InformationContainer>
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
