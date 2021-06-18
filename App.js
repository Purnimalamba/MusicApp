import 'react-native-gesture-handler';
import * as React from 'react';
import AppNavigator from './src/AppNavigator';
export default function App() {
  console.disableYellowBox = true;
  return <AppNavigator />;
}
