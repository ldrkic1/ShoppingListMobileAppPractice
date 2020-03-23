import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from  './components/Header.js';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';
import { uuid } from 'uuidv4';
export default function App() {
  var id = Math.random();
  const [items, setItems] = useState([
    {id: ++id, text:'Coca Cola'},
    {id: ++id, text:'Nutella'},
    {id: ++id, text:'Chocolate'},
    {id: ++id, text:'Banana'}
  ]); 

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
  const addItem = text => {
    if(!text) {
      Alert.alert('Error', 'Please, enter an item',[
        { text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: true }); //bez ovog nije moglo.....onPress: pa dalje
    }
    else {
      setItems(prevItems => {
        return [...prevItems, {id: ++id, text: text}];
      })
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
  <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60 //isti broh kao i height teksta u header.js
  },
});
