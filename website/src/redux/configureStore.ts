import { applyMiddleware, compose, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './reducer';
import { AppState, defaultState } from './state';

const isDev: boolean = process.env.NODE_ENV === 'development';

export const configureStore = (initialState: AppState | any = defaultState) => {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(promise, thunk),
      (isDev &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
        compose,
    ),
  );
};

export default configureStore();
