import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {KeyboardAvoidingView, SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './screens/Home/HomeScreen';
import SettingsScreen from './screens/Settings/SettingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator initialRouteName="Settings" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

const TabStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Settings" component={SettingsStack} />
  </Tab.Navigator>
);

const Router = () => {
  return (
    <KeyboardAvoidingView style={styles.container} enabled>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={TabStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
