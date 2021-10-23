import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, incrementAsync} from '../state/features/counter';
import {RootState} from '../state/store';

const Counter = () => {
  const {count} = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Button title="increment" onPress={() => dispatch(incrementAsync(2))} />
      <Text>{count}</Text>
      <Button title="decrement" onPress={() => dispatch(decrement())} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
