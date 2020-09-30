import React from 'react';
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';


export default function App() {
  // return (<WelcomeScreen />)
  // return (<ViewImageScreen />)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          // for IOS three properties
          shadowColor: "grey",
          shadowOffset: { height: 20, width: -20 }, // negative for the reverse of axis like the two plane charts
          shadowOpacity: 1,
          // for Android single property; as the android doesn't provides much control over the shadows color and opacity.
          elevation: 30
        }}
      />
    </View>
  )
}
