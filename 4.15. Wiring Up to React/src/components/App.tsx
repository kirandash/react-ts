import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  // 4.15. Wiring Up to React - with Provider and store
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
