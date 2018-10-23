import React, { Component } from 'react';
import { StyleSheet, Image,View, Text, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

//Assets
import spotifyLogo from 'SpotifyReactNative/assets/images/Spotify_Logo_RGB_White.png';

class Main extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.wrapperContainer}>
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
          />
          <View>
            <Image source={spotifyLogo} style={styles.logo}/> 
          </View>
          <Swiper autoplay activeDotColor= '#FFF'
            style={styles.swiper}
          >
            <View style={styles.slide}>
              <Text style={styles.textSlide}>Play your favorite songs and artist.</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.textSlide}>No credit card required.</Text>
            </View>
            <View style={styles.slide}>
              <Text style={styles.textSlide}>Listen on all your devices.</Text>
            </View>
          </Swiper>
          <TouchableOpacity style={[styles.button, styles.signUpButton]}>
            <Text style={styles.buttonText}>sign up free</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.facebookButton]}>
            <Text style={styles.buttonText}>continue with facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.logInButton]}>
            <Text style={[styles.buttonText, { color: 'black'}]}>log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    margin: 10,
  },
  wrapperContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#a4ddf9',
  },
  textSlide: {

  },
  textSlide: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  logo: {
    height: 50,
    width: 170,
  },
  swiper: {
  },
  containerButtons: {
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'stretch',
    margin: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold'
  },
  signUpButton:{
    backgroundColor: 'green',
  },
  facebookButton:{
    backgroundColor: '#4267b2',
  },
  logInButton:{
    backgroundColor: 'white',
  }
});

export default Main;
