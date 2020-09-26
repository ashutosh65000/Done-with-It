import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} selectable={true} selectionColor={"#99cc77"}>
        Hello there. This is a very long text. I want to make this text very very very long so that it takes atleast two lines.
      </Text>
      <Button
        color="magenta"
        title="Karishma Sharma"
        onPress={() => { console.log("Button Pressed") }}
      />
      <TouchableHighlight onPress={() => { console.log("Image Pressed") }}>
        {/* network images */}
        <Image
          fadeDuration={3000}
          source={
            {
              width: 200,
              height: 300,
              uri: "https://2.bp.blogspot.com/-cIjErjDVzYg/XMXsHNqcjCI/AAAAAAAAE8k/q1J6yx82Q8EEbGk2XbKIbzwHnsg-z4XBgCEwYBhgL/s1600/Karishma%2BSharma%2B-%2Bhot%2Bindian%2Bactress%2B-%2Bbra%2B-%2Bragini%2Bmms%2Breturns%2B%252820%2529.jpg"
            }
          }
        />
      </TouchableHighlight>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
