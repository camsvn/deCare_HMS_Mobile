import React from 'react';
// import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './state/store';
import Counter from './components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
