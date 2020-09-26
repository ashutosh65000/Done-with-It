import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} selectable={true} selectionColor={"#99cc77"}>
        Hello there. This is a very long text. I want to make this text very very very long so that it takes atleast two lines.
      </Text>
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
