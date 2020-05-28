import { Action } from "../../reducer";

export type Tab =
  | "Home"
  | "Employees"
  | "Proyects"
  | "Administration"
  | "Holidays";

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export type SET_CURRENT_PAGE = typeof SET_CURRENT_PAGE;

export type SetCurrentPageMeta = Action<SET_CURRENT_PAGE, CurrentPageMeta>;

type Actions = SetCurrentPageMeta;

export interface CurrentPageMeta {
  tab?: Tab;
  appBarTitle?: string;
}

export const defaultState = {};

export const setCurrentPageMeta = (
  payload: CurrentPageMeta
): SetCurrentPageMeta => ({
  type: SET_CURRENT_PAGE,
  payload
});

const reducer = (
  state: CurrentPageMeta = defaultState,
  { type, payload }: Actions
) => {
  switch (type) {
    case SET_CURRENT_PAGE:
      return payload;
    default:
      return state;
  }
};

export default reducer;
