import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';

// 4.11. Adding Action Creators
const searchRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
