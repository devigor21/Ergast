import { Dispatch } from 'redux';
import axios from 'axios';

import { DriverAction, DriverActionTypes } from '../../types/driverStore';

export const fetchDrivers = (offset: number) => {
  return async (dispatch: Dispatch<DriverAction>) => {
    try {
      dispatch({ type: DriverActionTypes.FETCH_DRIVERS });
      const response = await axios.get(
        `https://ergast.com/api/f1/current/drivers.json?limit=5&offset=${offset}`,
      );

      // setTimeout(() => {
      dispatch({
        type: DriverActionTypes.FETCH_DRIVERS_SUCCESS,
        payload: response.data,
      });
      // }, 2000);
    } catch (e) {
      dispatch({
        type: DriverActionTypes.FETCH_DRIVERS_ERROR,
        payload: 'Произошла ошибка при загрузке данных',
      });
    }
  };
};
