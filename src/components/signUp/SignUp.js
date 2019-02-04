//Libraries
import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import PropTypes from "prop-types";

//styles
import styles from "./styles";

class SignUp extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static navigationOptions = {
    headerTintColor: "white",
    headerTransparent: true
  };

  state = {
    fadeAnim: new Animated.Value(1),
    fadeAnimII: new Animated.Value(1),
    viewIn: true,
    step: -1
  };

  startOpacityAnimation = (to, time) => {
    Animated.timing(this.state.fadeAnim, {
      toValue: to,
      duration: time
    }).start();
  };

  render() {
    const { fadeAnim, fadeAnimII, viewIn, step } = this.state;
    return (
      <LinearGradient
        colors={["#5506e8", "#8b59ea"]}
        useAngle
        angle={135}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.wrapperContainer}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Create account</Text>
          <View style={styles.wrapperSwiper}>
            <Swiper
              ref="swiper"
              showsPagination={false}
              scrollEnabled={false}
              onIndexChanged={index => console.log("New index", index)}
            >
              <Animated.View style={{ ...styles.fieldset, opacity: fadeAnim }}>
                <Text style={styles.fieldsetTitle}>What's your email?</Text>
                <TextInput style={styles.fieldsetInput} />
                <Text style={styles.fieldsetWarn}>
                  You'll need to confirm this email later.
                </Text>
              </Animated.View>
              <Animated.View
                style={{ ...styles.fieldset, opacity: fadeAnimII }}
              >
                <Text style={styles.fieldsetTitle}>Create a password</Text>
                <TextInput style={styles.fieldsetInput} />
                <Text style={styles.fieldsetWarn}>
                  Use at least 8 characters.
                </Text>
              </Animated.View>
            </Swiper>
          </View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.buttonDisabled}
              onPress={() => {
                //if (viewIn) {
                //this.startOpacityAnimation(0, 500);
                //} else {
                //this.startOpacityAnimation(1, 500);
                //}
                this.setState(
                  {
                    viewIn: !viewIn,
                    step: step === 1 ? -1 : 1
                  },
                  () => this.refs.swiper.scrollBy(this.state.step)
                );
              }}
            >
              <Text style={styles.buttonText}>{"Next".toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default SignUp;
