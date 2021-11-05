import React from 'react';
// import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './state/store';

import Counter from './components/Counter';
import NoNetworkBar from './components/NoNetworkBar';
import Router from './Router';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NoNetworkBar />
        {/* <Counter /> */}
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
