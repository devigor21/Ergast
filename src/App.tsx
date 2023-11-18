import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './navigation/Navigation';
import { persistor, store } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Navigation />
    </PersistGate>
  </Provider>
);

export default App;
