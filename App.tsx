/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import Header from './components/Header';
import ListItems from './components/ListItems';


import {View, StyleSheet, FlatList, Text} from 'react-native';

function App(): React.JSX.Element {
  const [users, setUsers] = useState([
    {id: 1, name: 'Taha'},
    {id: 2, name: 'Adil'},
    {id: 3, name: 'Bilal'},
  ]);

  return (
    <View style={styles.wrapper}>
      <Header title="Shopping List" />
      <FlatList data={users} renderItem={({item}) => <ListItems item={item}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
