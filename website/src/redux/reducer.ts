import { AnyAction, combineReducers, Reducer } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import currentPageMeta from './reducers/currentPageMeta';
import login from './reducers/login';
import { AppState } from './state';
import page from './reducers/page';
import userList from './reducers/userList';
import proyectList from './reducers/proyectList';
import fingerprintDetails from './reducers/fingerprintDetails';
import { defaultState as dataDefaultState } from './reducers/dataState';

export interface Action<Type, Payload = {}> {
  type: Type;
  payload?: Payload;
}

export type ThunkResult<R> = ThunkAction<R, AppState, void, AnyAction>;
export type Dispatcher = ThunkDispatch<AppState, undefined, AnyAction>;

const appReducer: Reducer = combineReducers({
  currentPageMeta,
  login,
  userList: page(userList, dataDefaultState),
  proyectList: page(proyectList, dataDefaultState),
  fingerprintDetails: page(fingerprintDetails, dataDefaultState),
});

export default appReducer;
