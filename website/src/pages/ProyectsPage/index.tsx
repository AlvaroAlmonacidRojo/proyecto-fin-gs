import React, { FC } from "react";

import { ConnectedProyects } from "../../containers/Proyects";
import Page from "../Page";

export const ProyectsPage: FC<{}> = () => (
  <Page pageTitle="Proyects" tab="Proyects">
    <ConnectedProyects />
  </Page>
);
