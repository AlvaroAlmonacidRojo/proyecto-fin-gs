import React from "react";
import { connect } from "react-redux";

import DataContainer from "../../components/DataContainer";
import UsersComponent from "../../components/Users";
import actionDispatcher from "../../redux/actionDispatcher";
import { Dispatcher } from "../../redux/reducer";
import { dataSenderWithCallback } from "../../redux/reducers/dataState";
import {
  DefaultState as UserListDefaultState,
  getUserList
} from "../../redux/reducers/userList";
import { AppState } from "../../redux/state";

interface StateProps {
  userList: UserListDefaultState;
}

interface DispatchProps {
  dispatchGetUserList: (refresh: boolean) => () => void;
  dispatchSenderAction: (
    url: string,
    method: "POST",
    callback: Array<() => void>,
    tag: string,
    formData: {}
  ) => () => void;
}

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: AppState): StateProps => ({
  userList: state.userList
});

const mapDispatchToProps = (dispatch: Dispatcher): DispatchProps => ({
  dispatchGetUserList: actionDispatcher(getUserList, dispatch),
  dispatchSenderAction: actionDispatcher(dataSenderWithCallback, dispatch)
});

const InternalComponent = ({
  dispatchGetUserList,
  dispatchSenderAction,
  userList
}: Props) => {
  const formCallBack = (formData: {}) => () => {
    dispatchSenderAction(
      "/api/users",
      "POST",
      [dispatchGetUserList(true)],
      "",
      formData
    )();
  };
  return (
    <DataContainer data={userList} dataFetcher={dispatchGetUserList(true)}>
      {data => <UsersComponent users={data} formCallback={formCallBack} />}
    </DataContainer>
  );
};

export const ConnectedUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalComponent);
