import React, { FC } from 'react';

import Page from '../Page';
import { ConnectedProyects } from '../../containers/Proyects';

export const ProyectsPage: FC<{}> = () => (
    <Page pageTitle="Proyects" tab="Proyects">
        <ConnectedProyects />
    </Page>
);
