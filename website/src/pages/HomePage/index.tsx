import React, { FC } from 'react';

import Translate from '../../components/Translation';
import Page from '../Page';

export const HomePage: FC<{}> = () => (
    <Page pageTitle="Home" tab="Home">
        <p><Translate message="pages.homePage.label" /></p>
    </Page>
);
