import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

class Main extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    //title: "Hello",
    header: null,
    //headerTintColor: 'black',
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text style={styles.text} onPress={
          () => this.props.navigation.navigate('SignUp')
        }>
          Main
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text:{
    color: 'black',
  }
});

export default Main;
