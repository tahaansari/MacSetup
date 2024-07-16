import React from 'react'
import { StyleSheet, Text } from 'react-native'

const ListItems = ({item}) => {
  return (
    <Text>{item.name}</Text>
  )
}

const styles = StyleSheet.create({
    listItem:{
        backgroundColor:"gray",
        padding:10,
        borderBottomWidth:1,
        borderColor:"#eee"
    }
})

export default ListItems