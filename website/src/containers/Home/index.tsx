import React, { FC } from 'react';
import { connect } from 'react-redux';

import HomeComponent from '../../components/Home';

const InternalComponent: FC<{}> = () => {
  return <HomeComponent />;
};

export const ConnectedHome = connect(null, null)(InternalComponent);
