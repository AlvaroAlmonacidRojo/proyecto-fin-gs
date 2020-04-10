import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import { HomePage } from './pages/HomePage';
import { EmployeesPage } from './pages/EmployessPage';
import { ProyectsPage } from './pages/ProyectsPage';
import { HolidaysPage } from './pages/HolidaysPage';
import { AdministrationPage } from './pages/AdministrationPage';

const AppRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/empleados" exact component={EmployeesPage} />
        <Route path="/proyectos" exact component={ProyectsPage} />
        <Route path="/vacaciones" exact component={HolidaysPage} />
        <Route path="/administracion" exact component={AdministrationPage} />
      </Switch>
    </DashboardLayout>
  );
};

export default AppRoutes;
