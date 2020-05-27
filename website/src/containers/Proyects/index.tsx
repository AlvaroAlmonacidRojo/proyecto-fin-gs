import ProyectsComponent from '../../components/Proyects';

import React from 'react';
import { connect } from 'react-redux';

import { DefaultState as ProyectListDefaultState, getProyectList } from '../../redux/reducers/proyectList';
import { AppState } from '../../redux/state';
import { Dispatcher } from '../../redux/reducer';
import actionDispatcher from '../../redux/actionDispatcher';
import DataContainer from '../../components/DataContainer';
import { dataSenderWithCallback } from '../../redux/reducers/dataState';

interface StateProps {
  proyectList: ProyectListDefaultState;
}

interface DispatchProps {
  dispatchGetProyectList: (refresh: boolean) => () => void;
  dispatchSenderAction: (url: string, method: 'POST', callback: Array<() => void>, tag: string, formData: {}) => () => void;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
  proyectList: state.proyectList,
});

const mapDispatchToProps = (dispatch: Dispatcher): DispatchProps => ({
  dispatchGetProyectList: actionDispatcher(getProyectList, dispatch),
  dispatchSenderAction: actionDispatcher(dataSenderWithCallback, dispatch)
});

const InternalComponent = ({
  dispatchGetProyectList,
  dispatchSenderAction,
  proyectList,
}: Props) => {
  const formCallBack = (formData: {}) => () => {
    dispatchSenderAction(
      '/api/proyects',
      'POST',
      [dispatchGetProyectList(true)],
      '',
      formData,
    )();
  }
  return <DataContainer
    data={proyectList}
    dataFetcher={dispatchGetProyectList(true)}
  >
  {data => <ProyectsComponent proyects={data} formCallback={formCallBack} />}
  </DataContainer>;
};

export const ConnectedProyects = connect(mapStateToProps, mapDispatchToProps)(InternalComponent);
