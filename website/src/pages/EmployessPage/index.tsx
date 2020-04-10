import React, { FC } from 'react';

import Page from '../Page';
import { ConnectedEmployees } from '../../containers/Employees';

export const EmployeesPage: FC<{}> = () => (
    <Page pageTitle="Employees" tab="Employees">
        <ConnectedEmployees />
    </Page>
);
