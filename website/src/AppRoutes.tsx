import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import DashboardLayout from "./pages/DashboardLayout";


const AppRoutes = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route path="/" exact component={HomePage}/>
      </Switch>
    </DashboardLayout>
  );
};

export default AppRoutes;
