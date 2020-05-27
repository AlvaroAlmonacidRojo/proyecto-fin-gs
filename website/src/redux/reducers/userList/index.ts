import { GetUsersResponse } from '../../../../../types/build/users';

import { ThunkResult } from '../../reducer';
import dataStateReducer, {
  dataFetcher,
  DataState,
} from '../../reducers/dataState';

export const USER_LIST = 'USER_LIST';

export type USER_LIST = typeof USER_LIST;

export type UserList = GetUsersResponse;

export type DefaultState = DataState<UserList['data']>;

export type GetUserList = ThunkResult<Promise<UserList>>;

const defaultLink = 'api/users';

export const getUserList = (forceRefresh: boolean = false): GetUserList => {
  const url = `${defaultLink}`;
  return dataFetcher(url, USER_LIST, 'userList', {
    forceRefresh,
  });
};

const reducer = dataStateReducer<DefaultState, USER_LIST>(USER_LIST);

export default reducer;
