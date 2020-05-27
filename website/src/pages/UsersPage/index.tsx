import React, { FC } from 'react';

import Page from '../Page';
import { ConnectedUsers } from '../../containers/Users';

export const UsersPage: FC<{}> = () => (
    <Page pageTitle="Employees" tab="Employees">
        <ConnectedUsers />
    </Page>
);
