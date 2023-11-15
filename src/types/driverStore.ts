import type { apiData } from './apiData';

export interface DriverState {
  data: apiData | null;
  loading: boolean;
  error: null | string;
}

export enum DriverActionTypes {
  FETCH_DRIVERS = 'FETCH_DRIVERS',
  FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS',
  FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_FETCH_DRIVERS_ERROR',
}

interface FetchDriversAction {
  type: DriverActionTypes.FETCH_DRIVERS;
}

interface FetchDriversSuccessAction {
  type: DriverActionTypes.FETCH_DRIVERS_SUCCESS;
  payload: apiData;
}

interface FetchDriversErrorAction {
  type: DriverActionTypes.FETCH_DRIVERS_ERROR;
  payload: string;
}

export type DriverAction =
  | FetchDriversAction
  | FetchDriversErrorAction
  | FetchDriversSuccessAction;
