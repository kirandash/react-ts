import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// 4.21 Awkward typings around React Redux
// get type from reducers and assign it to root state
export type RootState = ReturnType<typeof reducers>;
