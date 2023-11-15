import { Provider } from 'react-redux';

import Navigation from './navigation/Navigation';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;