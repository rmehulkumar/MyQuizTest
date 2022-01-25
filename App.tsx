/**
 * React Native App
 */

import React from 'react';
import Navigation from '@components/Navigation';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
