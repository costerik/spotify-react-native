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
    viewIn: true
  };

  startOpacityAnimation = (to, time) => {
    Animated.timing(this.state.fadeAnim, {
      toValue: to,
      duration: time
    }).start();
  };

  render() {
    const { fadeAnim, viewIn } = this.state;
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
          <Animated.View style={{ ...styles.fieldset, opacity: fadeAnim }}>
            <Text style={styles.fieldsetTitle}>What's your email?</Text>
            <TextInput style={styles.fieldsetInput} />
            <Text style={styles.fieldsetWarn}>
              You'll need to confirm this email later.
            </Text>
          </Animated.View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.buttonDisabled}
              onPress={() => {
                if (viewIn) {
                  this.startOpacityAnimation(0, 500);
                } else {
                  this.startOpacityAnimation(1, 500);
                }

                this.setState({
                  viewIn: !this.state.viewIn
                });
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
