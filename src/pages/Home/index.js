import React from 'react';

import GlobalStyle from 'styles/Global';
import Section from './styles';

import { CardRepository } from 'components';

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <Section>
                <CardRepository />
            </Section>
        </>
    );
}
