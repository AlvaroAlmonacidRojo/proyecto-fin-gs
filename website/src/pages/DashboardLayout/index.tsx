import CssBaseline from '@material-ui/core/CssBaseline';
import React, { FC } from 'react';

import { ConnectedSideBar } from '../../containers/SideBar';

interface ComponentProps {
    tab?: string;
}

type Props = ComponentProps;

const DashboardLayout: FC<Props> = ({ children }) => {
    return (
        <div><CssBaseline /><ConnectedSideBar/><div>{children}</div></div>
    );
};

export default DashboardLayout;
