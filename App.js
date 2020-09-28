import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="magenta"
        title="Click Me"
        onPress={() =>
          Alert.alert(
            "Favourite Movie",
            "Avengers Assemble."
          )
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5422',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
