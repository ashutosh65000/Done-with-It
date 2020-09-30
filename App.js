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
          borderBottomColor: "green",
          borderRadius: 50,
          borderWidth: 10,
          borderTopStartRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
    </View>
  )
}
