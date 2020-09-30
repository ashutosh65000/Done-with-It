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
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            width: 50,
            height: 50,
            paddingHorizontal: 20,
            paddingTop: 20
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "magenta",
          width: 100,
          height: 100,
          margin: 20
        }}
      ></View>
    </View>
  )
}
