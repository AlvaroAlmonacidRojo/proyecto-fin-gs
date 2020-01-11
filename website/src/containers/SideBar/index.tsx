import React, { FC } from 'react';
import { connect } from 'react-redux';

import SideBar, { ComponentProps } from '../../components/SideBar';
import { CurrentPageMeta } from '../../redux/reducers/currentPageMeta';
import { AppState } from '../../redux/state';

interface StateProps {
  currentPageMeta: CurrentPageMeta;
}

type Props = StateProps & ComponentProps;

const mapStateToProps = ({ currentPageMeta }: AppState): StateProps => ({
  currentPageMeta,
});

const SideBarContainer: FC<Props> = ({ currentPageMeta }) => {
  return <SideBar active={currentPageMeta.tab} />;
};

export const ConnectedSideBar = connect(mapStateToProps)(SideBarContainer);
