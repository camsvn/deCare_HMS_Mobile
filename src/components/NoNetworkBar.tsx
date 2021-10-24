import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import { ERRORS } from '../constants/app-constants';
import { theme } from '../theme';

const OfflineBar = () => {
  const [isConnected, setConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => setConnected(Boolean(state.isConnected)));
    return () => {
      unsubscribe();
    };
  }, []);

  return !isConnected ? (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={theme['color-danger-800']}/>
      <Text style={styles.offlineText}>{ERRORS.OFFLINE}</Text>
    </SafeAreaView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme['color-danger-800'],
    paddingTop: 16,
  },
  offlineText: {
    color: theme['text-control-color'],
    padding: 8,
    textAlign: 'center',
    fontWeight: theme['font-medium'],
    fontSize: theme['text-primary-size'],
  },
});

export default OfflineBar;
