import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(naslov) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{naslov.title}</Text>
    </View>
  );
}
Header.defaultProps = {
    title:'Shopping'
  }
const styles = StyleSheet.create({
  header: {
      backgroundColor:'darkslateblue',
      height:60,
      padding: 15
  },
  text: {
      color:'white',
      fontSize: 23,
      textAlign:'center'
  }
});
