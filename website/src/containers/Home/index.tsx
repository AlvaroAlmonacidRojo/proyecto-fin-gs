import React, { FC } from 'react';
import { connect } from 'react-redux';
import { DefaultState as FingerprintDefaultState, getFingerprintDetails } from '../../redux/reducers/fingerprintDetails';

import HomeComponent from '../../components/Home';
import { AppState } from '../../redux/state';
import { Dispatcher } from '../../redux/reducer';
import DataContainer from '../../components/DataContainer';
import actionDispatcher from '../../redux/actionDispatcher';

interface StateProps {
  fingerprintDetails: FingerprintDefaultState;
}

interface DispatchProps {
  dispatchGetFingerprintDetails: (userId: string, refresh: boolean) => () => void;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
  fingerprintDetails: state.fingerprintDetails,
});

const mapDispatchToProps = (dispatch: Dispatcher): DispatchProps => ({
  dispatchGetFingerprintDetails: actionDispatcher(getFingerprintDetails, dispatch),
});
const InternalComponent: FC<Props> = ({
  fingerprintDetails,
  dispatchGetFingerprintDetails,
}) => {
  return <DataContainer
    data={fingerprintDetails}
    dataFetcher={dispatchGetFingerprintDetails('67390d41-a0f6-46e2-b1f7-935f6ca9cc3d?date=2020-05-08', true)}
  >
    {data => <HomeComponent />}
    </DataContainer>;
};

export const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(InternalComponent);
