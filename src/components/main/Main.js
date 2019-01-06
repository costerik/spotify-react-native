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
          <View style={styles.wrapperLogo}>
            <Image source={spotifyLogo} style={styles.logo}/>
          </View>
          <View style={styles.wrapperSwiper}>
            <Swiper
              autoplay
              activeDotColor= '#FFF'
              style={styles.swiper}
              dotStyle={styles.dot}
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
          </View>
          <View style={styles.wrapperButtons}>
            <TouchableOpacity style={[styles.button, styles.signUpButton]}>
              <Text style={styles.buttonText}>{'sign up free'.toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.facebookButton]}>
              <Text style={styles.buttonText}>
                {'continue with facebook'.toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.logInButton]}>
              <Text style={[styles.buttonText, { color: 'black'}]}>{'log in'.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 20,
    marginRight: 20,
    flex: 1
  },
  wrapperContainer:{
    flex: 1,
    backgroundColor: '#a4ddf9',
  },
  textSlide: {
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
  },
  wrapperLogo:{
    flex: 4,
    alignItems: 'center',
  },
  logo: {
    marginTop: 70,
    height: 52,
    width: 170,
  },
  wrapperSwiper:{
    flex:1,
  },
  swiper: {
  },
  wrapperButtons:{
    flex: 4,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 14,
  },
  signUpButton:{
    backgroundColor: '#1DB954',
  },
  facebookButton:{
    backgroundColor: '#3b5998',
  },
  logInButton:{
    backgroundColor: 'white',
  },
  dot: {
    opacity: 0.6,
  }
});

export default Main;
