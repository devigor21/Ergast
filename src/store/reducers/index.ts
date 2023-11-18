import { combineReducers } from 'redux';

import { driverReducer } from './driverReducer';
import { resultReducer } from './resultReducer';

export const rootReducer = combineReducers({
  driver: driverReducer,
  result: resultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
