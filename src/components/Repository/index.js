import React from 'react';
import PropTypes from 'prop-types';

import { Container, InformationContainer, Title, Hyperlink } from './styles';
import { RepositoryAvatar } from 'components';

function Repository({ owner, repository, src, alt }) {
    return (
        <Container>
            {console.log(src)}
            <InformationContainer>
                <RepositoryAvatar src={src} alt={alt} />
                <Title>{`${owner}/${repository}`}</Title>
            </InformationContainer>

            <Hyperlink to={`repository?owner=${owner}&repos=${repository}`}>
                Detalhes
            </Hyperlink>
        </Container>
    );
}

Repository.propTypes = {
    owner: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Repository;
