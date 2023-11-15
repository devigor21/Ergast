import {
  DriverAction,
  DriverActionTypes,
  DriverState,
} from '../../types/driverStore';

const initialState: DriverState = {
  data: null,
  loading: false,
  error: null,
};

export const driverReducer = (
  state = initialState,
  action: DriverAction,
): DriverState => {
  switch (action.type) {
    case DriverActionTypes.FETCH_DRIVERS:
      return { loading: true, error: null, data: null };
    case DriverActionTypes.FETCH_DRIVERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case DriverActionTypes.FETCH_DRIVERS_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};
