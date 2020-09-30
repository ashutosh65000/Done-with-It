import React from 'react';
import { Text, View } from 'react-native';
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
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Roboto",
          fontStyle: "italic",
          fontWeight: 200,
          textTransform: "uppercase",
          lineHeight: 30,
          color: "nebula",
          textAlign: "center"
        }}
      >
        I love React Native! My name is Ashutosh Srivastava and I am a software developer, i have learnt quite a few technologies
        during lockdown due to pandemic COVID-19.
      </Text>
    </View>
  )
}
