import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'



const ListItems = ({item}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listView}>
        <Text>{item.name}</Text>
        <Button style={styles.listButton}  title="X"/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:"#f8f8f8",
        padding:10,
        borderBottomWidth:1,
        borderColor:"#eee"
    },
    listView:{
      display:"flex",
      justifyContent:"space-between"
    },
    listButton:{
      backgroundColor:"#f8f8f8",
      display:"inline-block",
    }
})

export default ListItems