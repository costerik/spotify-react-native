//Libraries
import React, { Component } from "react";
import { Image, View, Text, StatusBar, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Swiper from "react-native-swiper";
import Video from "react-native-video";

//Utilities
import { asyncFacebookLogin } from "SpotifyReactNative/src/utilities/social-network/facebook";
import { emailValidation } from "SpotifyReactNative/src/utilities/validations";

//Assets
import SpotifyLogo from "SpotifyReactNative/assets/images/Spotify_Logo_RGB_White.png";
import BgVideo from "SpotifyReactNative/assets/videos/bg_video.mp4";

//Styles
import styles from "./styles";

class Main extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static navigationOptions = {
    header: null
  };

  onFacebookLogin = async () => {
    const data = await asyncFacebookLogin();
  };

  render() {
    return (
      <View style={styles.wrapperContainer}>
        <Video
          source={BgVideo}
          style={styles.backgroundVideo}
          muted
          resizeMode="cover"
          repeat
        />
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.wrapperLogo}>
            <Image source={SpotifyLogo} style={styles.logo} />
          </View>
          <View style={styles.wrapperSwiper}>
            <Swiper
              autoplay
              activeDotColor="#FFF"
              style={styles.swiper}
              dotStyle={styles.dot}
            >
              <View style={styles.slide}>
                <Text style={styles.textSlide}>
                  Play your favorite songs and artist.
                </Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.textSlide}>No credit card required.</Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.textSlide}>
                  Listen on all your devices.
                </Text>
              </View>
            </Swiper>
          </View>
          <View style={styles.wrapperButtons}>
            <TouchableOpacity
              style={[styles.button, styles.signUpButton]}
              onPress={this.props.navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonText}>
                {"sign up free".toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.facebookButton]}
              onPress={this.onFacebookLogin}
            >
              <Text style={styles.buttonText}>
                {"continue with facebook".toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.logInButton]}>
              <Text style={[styles.buttonText, { color: "black" }]}>
                {"log in".toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Main;
