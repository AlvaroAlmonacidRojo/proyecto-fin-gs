import { GetProyectsResponse } from '../../../../../types/build/proyects';

import { ThunkResult } from '../../reducer';
import dataStateReducer, {
  dataFetcher,
  DataState,
} from '../../reducers/dataState';

export const PROYECT_LIST = 'PROYECT_LIST';

export type PROYECT_LIST = typeof PROYECT_LIST;

export type ProyectList = GetProyectsResponse;

export type DefaultState = DataState<ProyectList['data']>;

export type GetProyectList = ThunkResult<Promise<ProyectList>>;

const defaultLink = 'api/proyects';

export const getProyectList = (forceRefresh: boolean = false): GetProyectList => {
  const url = `${defaultLink}`;
  return dataFetcher(url, PROYECT_LIST, 'proyectList', {
    forceRefresh,
  });
};

const reducer = dataStateReducer<DefaultState, PROYECT_LIST>(PROYECT_LIST);

export default reducer;
