import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "orange" }}>
      <Button
        color="magenta"
        title="Click Me"
        onPress={() =>
          Alert.alert(
            "Favourite Movie",
            "Avengers Assemble."
          )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
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
