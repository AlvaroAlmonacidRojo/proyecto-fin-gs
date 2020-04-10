import React, { FC } from 'react';
import { connect } from 'react-redux';

import AdministrationComponent from '../../components/Administration';
import Authorize from '../Authorize';
import LockedElement from '../../components/LockedElement';

const InternalComponent: FC<{}> = () => {
  return <Authorize require={{
    mode: 'all',
    permissions: [],
  }}
  lockedElement={<LockedElement />}><AdministrationComponent /></Authorize>;
};

export const ConnectedAdministration = connect(null, null)(InternalComponent);
