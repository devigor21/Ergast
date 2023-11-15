import { combineReducers } from 'redux';
import { driverReducer } from './driverReducer';

export const rootReducer = combineReducers({
  driver: driverReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
