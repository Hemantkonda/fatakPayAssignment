import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootStack from './src/navigation/RootStack';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#44226E'
      />
      <RootStack />
    </NavigationContainer>
  );
}