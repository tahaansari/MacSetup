/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Header from './components/Header';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

function App(): React.JSX.Element {
  return (
        <View style={styles.wrapper}>
            <Header title="Shopping List"/>
        </View>
  );
}

const styles  = StyleSheet.create({
  wrapper:{
    flex:1,
    paddingTop:60
  },
})

export default App;
