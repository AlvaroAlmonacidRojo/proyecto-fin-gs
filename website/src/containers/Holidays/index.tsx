import React, { FC } from 'react';
import { connect } from 'react-redux';

import HolidaysComponent from '../../components/Holidays';

const InternalComponent: FC<{}> = () => {
  return <HolidaysComponent />;
};

export const ConnectedHolidays = connect(null, null)(InternalComponent);
