import React, { FC } from 'react';
import { connect } from 'react-redux';

import EmployeesComponent from '../../components/Employees';

const InternalComponent: FC<{}> = () => {
  return <EmployeesComponent />;
};

export const ConnectedEmployees = connect(null, null)(InternalComponent);
