import { AnyAction, combineReducers, Reducer } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import currentPageMeta from "./reducers/currentPageMeta";
import { AppState } from "./state";

export interface Action<Type, Payload = {}> {
  type: Type;
  payload?: Payload;
}

export type ThunkResult<R> = ThunkAction<R, AppState, void, AnyAction>;
export type Dispatcher = ThunkDispatch<AppState, undefined, AnyAction>;

const appReducer: Reducer = combineReducers({
  currentPageMeta,
});

export default appReducer;
