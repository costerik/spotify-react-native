import { createStackNavigator } from 'react-navigation';
import Main from 'SpotifyReactNative/src/components/main';
import SignUp from 'SpotifyReactNative/src/components/signUp';

export default createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        headerBackTitle: null,
      },
    },
    SignUp,
  },
  {
    // headerMode: 'none',
  }
);
