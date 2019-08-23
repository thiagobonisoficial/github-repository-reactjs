import React from 'react';

import Container from './styles';
import { FaSpinner } from 'react-icons/fa';

export default function LoadingSpinner() {
    return (
        <Container>
            <FaSpinner size={15} />
        </Container>
    );
}
