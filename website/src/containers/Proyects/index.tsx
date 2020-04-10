import React, { FC } from 'react';
import { connect } from 'react-redux';

import ProyectsComponent from '../../components/Proyects';

const InternalComponent: FC<{}> = () => {
  return <ProyectsComponent />;
};

export const ConnectedProyects = connect(null, null)(InternalComponent);
