import { Dispatch } from 'redux';
import axios from 'axios';

import { ResultAction, ResultActionTypes } from '../../types/resultStore';

export const fetchResults = () => {
  return async (dispatch: Dispatch<ResultAction>) => {
    try {
      dispatch({ type: ResultActionTypes.FETCH_RESULTS });
      const response = await axios.get(
        'http://ergast.com/api/f1/current/last/results.json',
      );

      dispatch({
        type: ResultActionTypes.FETCH_RESULTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ResultActionTypes.FETCH_RESULTS_ERROR,
        payload: 'Произошла ошибка при загрузке данных',
      });
    }
  };
};
