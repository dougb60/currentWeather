import { combineReducers } from 'redux';
import * as weather from './weather';

export const reducers = combineReducers({
  ...weather.reducers,
});

export const actions = {
  weather: weather.actions,
};
