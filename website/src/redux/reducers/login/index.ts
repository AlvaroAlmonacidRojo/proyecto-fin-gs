import { Action } from "../../reducer";

export const defaultState = {};

export const SET_LOGIN = 'SET_LOGIN';

export type SET_LOGIN = typeof SET_LOGIN;

export type SetLogin = Action<SET_LOGIN, Login>;

type Actions = SetLogin;

export type Login = {};

export const setLogin = (
  payload: Login,
): SetLogin => ({
  type: SET_LOGIN,
  payload,
});

const reducer = (
  state: Login = defaultState,
  { type, payload }: Actions,
) => {
  switch (type) {
    case SET_LOGIN:
      return payload;
    default:
      return state;
  }
};

export default reducer;