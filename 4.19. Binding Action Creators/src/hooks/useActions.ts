import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();

  // bindActionCreators to dispatch
  return bindActionCreators(actionCreators, dispatch);
  // { searchRepositories: dispatch(searchRepositories) }
};
