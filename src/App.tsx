import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './state/features/counter';
import {store} from './state/store';
import {RootState} from './state/store';
import Counter from './components/Counter';

const App = () => {
  // const [count, setCount] = useState<number>(0);
  // const {count} = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch();

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <Provider store={store}>
      <Counter />
      {/* <SafeAreaView style={styles.container}>
        <Button title="increment" onPress={() => dispatch(increment())} />
        <Text>{count}</Text>
        <Button title="decrement" onPress={() => dispatch(decrement())} />
      </SafeAreaView> */}
    </Provider>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;
