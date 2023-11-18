import {
  ResultAction,
  ResultActionTypes,
  ResultState,
} from '../../types/resultStore';

const initialState: ResultState = {
  data: null,
  loading: false,
  error: null,
};

export const resultReducer = (
  state = initialState,
  action: ResultAction,
): ResultState => {
  switch (action.type) {
    case ResultActionTypes.FETCH_RESULTS:
      return { loading: true, error: null, data: null };
    case ResultActionTypes.FETCH_RESULTS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ResultActionTypes.FETCH_RESULTS_ERROR:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};
