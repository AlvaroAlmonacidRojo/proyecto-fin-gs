import { Reducer } from "redux";
import typeToReducer from "type-to-reducer";
import { ErrorResponse } from "../../../../../types/build/response";

import { fetch, sendFile, sendJSON } from "../../../util/fetch";
import { Action } from "../../reducer";
import { AppState } from "../../state";

export interface InitialState {
  state: "INIT";
  data?: any;
}

export interface LoadingState {
  state: "PENDING";
}

export interface SuccessState<T> {
  state: "READY";
  data: T;
}

export interface ErrorState {
  state: "ERROR";
  error: ErrorResponse;
}

export type DataState<T> =
  | LoadingState
  | SuccessState<T>
  | ErrorState
  | InitialState;

export type DataStates = "INIT" | "PENDING" | "READY" | "ERROR";

export interface MetaOption {
  forceRefresh: boolean;
  retry?: number;
  callback?: (...args: any[]) => void;
}

export const defaultState: InitialState = {
  state: "INIT"
};

const allowedReducers = [""];

export const dataReset = (actionType: string) => ({
  type: `${actionType}_RESET`
});

export function dataFetcher<T>(
  url: string,
  actionType: T,
  applicationState: keyof AppState,
  meta: MetaOption = {
    forceRefresh: false,
    retry: 0
  }
) {
  return (
    dispatch: (a: Action<any>) => Promise<any>,
    getState: () => AppState
  ) => {
    return dataFetcherWithRetry(
      url,
      actionType,
      applicationState,
      dispatch,
      getState,
      meta
    );
  };
}

const dataFetcherWithRetry = <T>(
  url: string,
  actionType: T,
  applicationState: keyof AppState,
  dispatch: (a: Action<any>) => Promise<any>,
  getState: () => AppState,
  meta: {
    forceRefresh: boolean;
    retry?: number;
    callback?: (...args: any[]) => void;
  }
) => {
  const currentState = getState()[applicationState];
  const initStateOrErrorState =
    "state" in currentState &&
    (allowedReducers.includes(applicationState) ||
      currentState.state === "INIT" ||
      currentState.state === "ERROR");
  if (initStateOrErrorState || meta.forceRefresh) {
    const promise = fetch(url);

    return dispatch({
      type: actionType,
      payload: promise
    }).catch((err: ErrorResponse) => {
      if (meta.retry) {
        const newRetry = meta.retry === 1 ? undefined : meta.retry - 1;
        // TODO: work out whether this promise should be awaited here.
        // tslint:disable-next-line: no-floating-promises
        dataFetcherWithRetry(
          url,
          actionType,
          applicationState,
          dispatch,
          getState,
          {
            forceRefresh: meta.forceRefresh,
            retry: newRetry,
            callback: meta.callback
          }
        );
      } else {
        if (meta.callback) {
          meta.callback(dispatch, getState);
        }
        // TODO: work out whether this promise should be awaited here.
        // tslint:disable-next-line: no-floating-promises
      }
    });
  }
  return Promise.resolve(undefined);
};

export function dataSender<T>(
  url: string,
  method: "PUT" | "POST" | "PATCH" | "DELETE",
  data: {} | undefined,
  actionType: T,
  applicationState: keyof AppState,
  meta = {
    forceRefresh: false
  }
) {
  return (
    dispatch: (a: Action<any>) => Promise<any>,
    getState: () => AppState
  ) => {
    const currentState = getState()[applicationState];
    if (
      ("state" in currentState &&
        (currentState.state === "INIT" || currentState.state === "ERROR")) ||
      meta.forceRefresh
    ) {
      const promise = sendJSON(url, method, data);
      return dispatch({
        type: actionType,
        payload: promise
      });
    }
    return Promise.resolve(undefined);
  };
}

export function dataSenderWithCallback(
  url: string,
  method: "PUT" | "POST" | "PATCH" | "DELETE",
  callbacks: Array<() => void> = [],
  tag: string = "ACTION_SUCCEEDED",
  formData: {}
): (dispatch: any, getState: any) => Promise<any> {
  return (
    dispatch: (a: Action<any>) => Promise<any>,
    getState: () => AppState
  ) => {
    const stringify = JSON.stringify(formData);
    const promise = sendJSON(
      url,
      method,
      stringify.length > 2 ? formData : undefined
    );
    promise
      .then(() => {
        callbacks.forEach(callback => {
          callback();
        });
        // TODO: work out whether this promise should be awaited here.
        // tslint:disable-next-line: no-floating-promises
      })
      .catch((err: ErrorResponse) => {
        callbacks.forEach(callback => {
          callback();
        });
        // TODO: work out whether this promise should be awaited here.
        // tslint:disable-next-line: no-floating-promises
      });
    return Promise.resolve(undefined);
  };
}

export function fileSender<T>(
  url: string,
  method: "PUT" | "POST",
  formData: FormData,
  actionType: T,
  applicationState: keyof AppState,
  meta = {
    forceRefresh: false
  }
) {
  return (
    dispatch: (a: Action<any>) => Promise<any>,
    getState: () => AppState
  ) => {
    const currentState = getState()[applicationState];
    if (
      ("state" in currentState &&
        (currentState.state === "INIT" || currentState.state === "ERROR")) ||
      meta.forceRefresh
    ) {
      const promise = sendFile(url, method, formData);
      return dispatch({
        type: actionType,
        payload: promise
      });
    }
    return Promise.resolve(undefined);
  };
}

export function dataStateReducer<S, T>(actionType: string, initialState = {}) {
  return typeToReducer(
    {
      [actionType]: {
        PENDING: (): LoadingState => ({
          state: "PENDING"
        }),
        REJECTED: (state, action): ErrorState => ({
          state: "ERROR",
          error: action.payload
        }),
        FULFILLED: (state, action): SuccessState<S> => ({
          state: "READY",
          data:
            (action.payload &&
              (action.payload.totalCount
                ? action.payload
                : action.payload.data)) ||
            null
        }),
        RESET: (state, action): InitialState => ({
          state: "INIT",
          data: initialState
        })
      }
    },
    defaultState
  ) as Reducer<S, Action<T>>;
}
export default dataStateReducer;
