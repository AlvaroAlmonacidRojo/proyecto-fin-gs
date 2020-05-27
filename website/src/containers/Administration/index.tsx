import React, { FC } from "react";
import { connect } from "react-redux";

import AdministrationComponent from "../../components/Administration";
import LockedElement from "../../components/LockedElement";
import Authorize from "../Authorize";

const InternalComponent: FC<{}> = () => {
  return (
    <Authorize
      require={{
        mode: "all",
        permissions: []
      }}
      lockedElement={<LockedElement />}
    >
      <AdministrationComponent />
    </Authorize>
  );
};

export const ConnectedAdministration = connect(null, null)(InternalComponent);
