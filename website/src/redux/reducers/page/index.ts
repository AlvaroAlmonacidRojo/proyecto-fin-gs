import { AnyAction, Reducer } from "redux";

import { Action } from "../../reducer";

export const RESET_PAGE = "RESET_PAGE";

export type RESET_PAGE = typeof RESET_PAGE;

export type ResetPageData = Action<RESET_PAGE, {}>;

export const resetPageData = (): ResetPageData => ({
  type: RESET_PAGE
});

export function pageReducer<T extends Reducer>(
  reducer: T,
  initialState: ReturnType<typeof reducer>
) {
  return ((state: ReturnType<typeof reducer>, action: AnyAction) => {
    if (action.type === RESET_PAGE) {
      return initialState;
    }
    return reducer(state, action);
  }) as Reducer<ReturnType<typeof reducer>, AnyAction>;
}

export default pageReducer;
