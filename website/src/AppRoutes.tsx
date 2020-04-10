import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import { HomePage } from './pages/HomePage';

const AppRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </DashboardLayout>
  );
};

export default AppRoutes;
