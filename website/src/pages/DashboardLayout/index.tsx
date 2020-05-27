import CssBaseline from "@material-ui/core/CssBaseline";
import React, { FC, ReactNode } from "react";

import { ConnectedSideBar } from "../../containers/SideBar";

interface ComponentProps {
  tab?: string;
  children: ReactNode;
}

type Props = ComponentProps;

const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <ConnectedSideBar children={children} />
    </div>
  );
};

export default DashboardLayout;
