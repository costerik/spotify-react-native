import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

class SignUp extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Sign up",
    //header: null, // (<Text>Hello</Text>),
    headerTintColor: 'white',
    headerTransparent: true
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={
          () => this.props.navigation.navigate('EntryView')
        }>
          Hello SignUp  
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
    backgroundColor: 'blue',
  },
  text:{
    color: 'black',
  }
});

export default SignUp;
