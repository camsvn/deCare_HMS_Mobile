import React from 'react';
import {Heading, Text} from 'native-base';
import {Dimensions, PixelRatio, SafeAreaView, StyleSheet, Text as NText} from 'react-native';
import Headerbar from '../../components/HeaderBar';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreenComponent = () => {
  let fontScale = PixelRatio.get();
  let pxr = PixelRatio.getPixelSizeForLayoutSize(32);
  return (
    <SafeAreaView style={styles.mainScreen}>
      {/* <LinearGradient
        colors={['#8067ff', '#5781ff', '#2996fd', '#18a6dd', '#00af98']}
        locations={[0.2, 0.36, 0.53, 0.71, 1]}
        style={styles.mainScreen}> */}
      <Headerbar title="Home Screen Main" />
      <Heading style={styles.customFont} size="2xl">
        Home Screen
      </Heading>
      <Text style={{fontFamily: 'Gilroy-Regular', ...styles.regFont}}>{fontScale}</Text>
      <Text style={styles.regFont}>{pxr}</Text>
      <Text style={styles.regFont}>{JSON.stringify(Dimensions.get('window'))}</Text>
      <Text style={styles.regFont}>{JSON.stringify(Dimensions.get('screen'))}</Text>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  customFont: {
    // fontFamily: 'Gilroy-Bold',
    // color: 'white',
    // fontSize: 32,
  },
  regFont: {
    fontSize: 20,
  },
});

export default HomeScreenComponent;
