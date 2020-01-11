import React, { FC } from 'react';

import Page from '../Page';

export const HomePage: FC<{}> = () => (
    <Page pageTitle="Home" tab="Home">
        <p>{'Home page'}</p>
    </Page>
)