// 4.3 Reducer Setup

// state interface
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// 4.6. Typing an Action
// interface Action {
//   type: string;
//   payload?: any; // optional
// }

// 4.7. Separate Interfaces for Actions
interface SearchRepositoriesAction {
  type: 'search_repositories';
} // no payload

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
} // payload - array of strings

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
} // payload - string

// reducer
// 4.5. Annotating the Return Type for reducer with RepositoriesState
const reducer = (state: RepositoriesState, action:     | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction): RepositoriesState => {
  // type guard makes sure action type is 100% match
  switch (action.type) {
    case 'search_repositories':
      return { loading: true, error: null, data: [] };
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_repositories_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
