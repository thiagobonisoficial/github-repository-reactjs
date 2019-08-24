import React from 'react';

import { Section, Img, Hyperlink } from './styles';

import Error404GIF from 'assets/images/error404.gif';
import GlobalStyle from 'styles/Global';

export default function Error404() {
    return (
        <>
            <GlobalStyle />
            <Section>
                <Img src={Error404GIF} alt="Error 404 Animation" />
                <Hyperlink to="/home">Go back to homepage</Hyperlink>
            </Section>
        </>
    );
}
