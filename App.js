import React from 'react';
import { View } from 'react-native';


export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "row"
      }}>
      <View
        style={{
          backgroundColor: "gold",
          width:100,
          height:100
        }} />
      <View
        style={{
          backgroundColor: "silver",
          width:100,
          height:100
        }} />
      <View
        style={{
          backgroundColor: "tomato",
          width:100,
          height:100
        }} />
    </View>
  )
}
