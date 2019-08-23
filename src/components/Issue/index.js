import React from 'react';

import {
    Item,
    Container,
    InformationContainer,
    BadgesContainer,
    Username,
} from './styles';
import { Avatar, Badge } from 'components';

export default function Issue({ userAvatar, username, issueTitle }) {
    return (
        <>
            <Item>
                <Avatar
                    src={userAvatar}
                    alt={`${username} AVATAR`}
                    theme="small"
                    margin="0 0 0 1.5rem"
                />

                <Container>
                    <InformationContainer>
                        <h4>{issueTitle}</h4>
                        <Username>{username}</Username>
                    </InformationContainer>
                    <BadgesContainer>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                        <Badge theme="light" margin=".3rem 0 0 .3rem">
                            docs
                        </Badge>
                    </BadgesContainer>
                </Container>
            </Item>
        </>
    );
}
