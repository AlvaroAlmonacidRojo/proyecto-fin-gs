import React, { FC } from 'react';

import { ConnectedHome } from '../../containers/Home';
import Page from '../Page';

export const HomePage: FC<{}> = () => (
    <Page pageTitle="Home" tab="Home">
        <ConnectedHome />
    </Page>
);
