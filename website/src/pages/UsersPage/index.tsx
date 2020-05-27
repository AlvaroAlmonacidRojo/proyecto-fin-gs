import React, { FC } from "react";

import { ConnectedUsers } from "../../containers/Users";
import Page from "../Page";

export const UsersPage: FC<{}> = () => (
  <Page pageTitle="Employees" tab="Employees">
    <ConnectedUsers />
  </Page>
);
