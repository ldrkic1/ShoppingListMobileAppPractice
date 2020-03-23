import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
export default function ListItem({item, deleteItem}) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemVier}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Ionicons name="ios-close" size={30}  color='red' onPress={() => {deleteItem(item.id)}}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem: {
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor: '#eee'

    },
    listItemVier: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listItemText: {
        fontSize: 18
    }
});
