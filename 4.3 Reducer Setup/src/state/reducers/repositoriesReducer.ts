// 4.3 Reducer Setup

// state interface
interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// 4.6. Typing an Action
interface Action {
  type: string;
  payload?: any; // optional
}

// reducer
// 4.5. Annotating the Return Type for reducer with RepositoriesState
const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
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
