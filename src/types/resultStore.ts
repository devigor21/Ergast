import { ApiResultData } from './apiResultData';

export interface ResultState {
  data: ApiResultData | null;
  loading: boolean;
  error: null | string;
}

export enum ResultActionTypes {
  FETCH_RESULTS = 'FETCH_RESULTS',
  FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS',
  FETCH_RESULTS_ERROR = 'FETCH_RESULTS_FETCH_RESULTS_ERROR',
}

interface FetchResultsAction {
  type: ResultActionTypes.FETCH_RESULTS;
}

interface FetchResultsSuccessAction {
  type: ResultActionTypes.FETCH_RESULTS_SUCCESS;
  payload: ApiResultData;
}

interface FetchResultsErrorAction {
  type: ResultActionTypes.FETCH_RESULTS_ERROR;
  payload: string;
}

export type ResultAction =
  | FetchResultsAction
  | FetchResultsErrorAction
  | FetchResultsSuccessAction;
