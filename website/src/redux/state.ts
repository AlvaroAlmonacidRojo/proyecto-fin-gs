import {
    CurrentPageMeta,
    defaultState as currentPageDefaultState,
} from './reducers/currentPageMeta';
import { Login, defaultState as loginDefaultState } from './reducers/login';

export interface AppState {
  currentPageMeta: CurrentPageMeta;
  login: Login;
}

export const defaultState: AppState = {
  currentPageMeta: currentPageDefaultState,
  login: loginDefaultState,
};
