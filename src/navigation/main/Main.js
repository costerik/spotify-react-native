import { createStackNavigator } from 'react-navigation';
import Sign from '../sign';
import Entry from '../entry';

export default createStackNavigator(
  {
    Sign,
    Entry,
  },
  {
    headerMode: 'none',
  }
);
