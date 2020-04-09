import {
    CurrentPageMeta,
    defaultState as currentPageDefaultState,
} from './reducers/currentPageMeta';

export interface AppState {
  currentPageMeta: CurrentPageMeta;
}

export const defaultState: AppState = {
  currentPageMeta: currentPageDefaultState,
};
