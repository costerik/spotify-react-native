//Libraries
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
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

  render() {
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
          <View style={styles.fieldset}>
            <Text style={styles.fieldsetTitle}>What's your email?</Text>
            <TextInput style={styles.fieldsetInput} />
            <Text style={styles.fieldsetWarn}>
              You'll need to confirm this email later.
            </Text>
          </View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.buttonDisabled}
              disabled
              onPress={() => null}
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
