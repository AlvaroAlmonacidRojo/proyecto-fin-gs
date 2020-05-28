import {
  CurrentPageMeta,
  defaultState as currentPageDefaultState
} from "./reducers/currentPageMeta";
import { defaultState as dataDefaultState } from "./reducers/dataState";
import { DefaultState as FingerprintDefaultState } from "./reducers/fingerprintDetails";
import { defaultState as loginDefaultState, Login } from "./reducers/login";
import { DefaultState as ProyectListDefaultState } from "./reducers/proyectList";
import { DefaultState as UserListDefaultState } from "./reducers/userList";

export interface AppState {
  currentPageMeta: CurrentPageMeta;
  login: Login;
  userList: UserListDefaultState;
  proyectList: ProyectListDefaultState;
  fingerprintDetails: FingerprintDefaultState;
}

export const defaultState: AppState = {
  currentPageMeta: currentPageDefaultState,
  login: loginDefaultState,
  userList: dataDefaultState,
  proyectList: dataDefaultState,
  fingerprintDetails: dataDefaultState
};
