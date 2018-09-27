import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const EntryView = ({navigation}) => (
  <View style={styles.container}>
    <Text onPress={()=>navigation.navigate('EntryViewII') }>Entry View</Text>
  </View>
);
const EntryViewII = ({navigation}) => (
  <View style={styles.container}>
    <Text onPress={()=>navigation.navigate('Main') }>Entry View</Text>
  </View>
);

EntryView.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text:{
    color: 'black',
  }
});


export default createStackNavigator(
  {
    EntryView,
    EntryViewII,
  },
);
