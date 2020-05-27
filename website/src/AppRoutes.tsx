import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import { HomePage } from "./pages/HomePage";
import { ProyectsPage } from "./pages/ProyectsPage";
import { UsersPage } from "./pages/UsersPage";

const AppRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/empleados" exact component={UsersPage} />
        <Route path="/proyectos" exact component={ProyectsPage} />
      </Switch>
    </DashboardLayout>
  );
};

export default AppRoutes;
