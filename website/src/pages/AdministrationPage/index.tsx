import React, { FC } from 'react';

import Page from '../Page';
import { ConnectedAdministration } from '../../containers/Administration';

export const AdministrationPage: FC<{}> = () => (
    <Page pageTitle="Administration" tab="Administration">
        <ConnectedAdministration />
    </Page>
);
