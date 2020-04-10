import React, { FC } from 'react';

import Page from '../Page';
import { ConnectedHolidays } from '../../containers/Holidays';

export const HolidaysPage: FC<{}> = () => (
    <Page pageTitle="Holidays" tab="Holidays">
        <ConnectedHolidays />
    </Page>
);
