import React, { Component, Fragment } from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from 'SpotifyReactNative/src/components/main';

export default createStackNavigator(
  {
    main: Main,
  }, {
    headerMode: 'none'
  }
);
