import { createStackNavigator, createAppContainer } from 'react-navigation';
import Sign from '../sign';
import Entry from '../entry';

const MainStackNavigator = createStackNavigator(
  {
    Sign,
    Entry,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(MainStackNavigator);
