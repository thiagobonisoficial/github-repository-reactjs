import React from 'react';

import GlobalStyle from 'styles/Global';
import Section from './styles';
import { CardIssue } from 'components';

export default function Repository() {
    return (
        <>
            <GlobalStyle />
            <Section>
                <CardIssue />
            </Section>
        </>
    );
}
