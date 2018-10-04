import React, { Component } from 'react';
import { StyleSheet, Image,View, Text, StatusBar } from 'react-native';
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
        {/*<Swiper autoplay activeDotColor= '#FFF'>
          <View style={styles.slide}>
            <Text style={styles.textSlide}>Play your favorite songs and artist.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.textSlide}>No credit card required.</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.textSlide}>Listen on all your devices.</Text>
          </View>
        </Swiper>*/}
        <View>
          <Image source={spotifyLogo} style={styles.logo}/> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a4ddf9',
  },
  text:{
    color: 'black',
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
  }
});

export default Main;
