// Libraries
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import { HeaderBackButton } from 'react-navigation';

// styles
import styles from './styles';

class SignUp extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static navigationOptions = ({ navigation }) => {
    const goBack = navigation.goBack;
    const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            const { step, scrollBy } = params;
            if (step === 0) {
              goBack();
            } else {
              scrollBy(-1);
            }
          }}
          tintColor="white"
        />
      ),
      headerTransparent: true,
    };
  };

  state = {
    fadeAnim: new Animated.Value(1),
    fadeAnimII: new Animated.Value(1),
    viewIn: true,
    step: 0,
  };

  startOpacityAnimation = (to, time) => {
    Animated.timing(this.state.fadeAnim, {
      toValue: to,
      duration: time,
    }).start();
  };

  scrollBy = index => {
    this.refs.swiper.scrollBy(index);
  };

  componentDidMount() {
    this.props.navigation.setParams({
      scrollBy: this.scrollBy,
      step: 0,
    });
  }

  render() {
    const { fadeAnim, fadeAnimII, viewIn, step } = this.state;
    return (
      <LinearGradient
        colors={['#5506e8', '#8b59ea']}
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
              loop={false}
              scrollEnabled={false}
              onIndexChanged={index => {
                this.setState({ step: index });
                this.props.navigation.setParams({ step: index });
              }}
            >
              <View style={{ ...styles.fieldset, opacity: fadeAnim }}>
                <Text style={styles.fieldsetTitle}>What's your email?</Text>
                <TextInput style={styles.fieldsetInput} />
                <Text style={styles.fieldsetWarn}>You'll need to confirm this email later.</Text>
              </View>
              <View style={{ ...styles.fieldset, opacity: fadeAnimII }}>
                <Text style={styles.fieldsetTitle}>Create a password</Text>
                <TextInput style={styles.fieldsetInput} />
                <Text style={styles.fieldsetWarn}>Use at least 8 characters.</Text>
              </View>
              <View style={{ ...styles.fieldset, opacity: fadeAnimII }}>
                <Text style={styles.fieldsetTitle}>What's your date of birth?</Text>
                <TextInput style={styles.fieldsetInput} />
                <Text style={styles.fieldsetWarn} />
              </View>
            </Swiper>
          </View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.buttonDisabled}
              onPress={() => {
                // if (viewIn) {
                // this.startOpacityAnimation(0, 500);
                // } else {
                // this.startOpacityAnimation(1, 500);
                // }
                const {
                  swiper: {
                    props: { children },
                  },
                } = this.refs;

                this.setState(
                  {
                    viewIn: !viewIn,
                    step: step < children.length ? step + 1 : step,
                  },
                  () => {
                    this.refs.swiper.scrollBy(this.state.step < children.length ? 1 : 0);
                    this.props.navigation.setParams({ step: this.state.step });
                  }
                );
              }}
            >
              <Text style={styles.buttonText}>{'Next'.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default SignUp;
