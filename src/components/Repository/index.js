import React from 'react';
import PropTypes from 'prop-types';

import {
    Item,
    InformationContainer,
    NavLinkContainer,
    Title,
    Hyperlink,
} from './styles';
import { Avatar } from 'components';

function Repository({ full_name, owner, repository, avatar }) {
    return (
        <Item>
            <InformationContainer>
                <Avatar
                    src={avatar}
                    alt={`REPOSITORY ${full_name} AVATAR`}
                    theme="extraSmall"
                    margin="0 0 .2rem 0"
                />
                <Title>{full_name}</Title>
            </InformationContainer>

            <NavLinkContainer>
                <Hyperlink
                    to={{
                        pathname: '/repository',
                        search: `?owner=${owner}&repos=${repository}`,
                    }}
                >
                    Detalhes
                </Hyperlink>
            </NavLinkContainer>
        </Item>
    );
}

Repository.propTypes = {
    full_name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Repository;
