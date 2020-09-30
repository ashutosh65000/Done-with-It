import React from 'react';
import { Image, StyleSheet, View, Platform, StatusBar } from 'react-native';

import colors from "../config/colors";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.close} />
            <View style={styles.delete} />
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    image: {
        width: "100%",
        height: "100%"
    },
    close: {
        backgroundColor: colors.primary_color,
        width: 50,
        height: 50,
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        left: 30,
    },
    delete: {
        backgroundColor: colors.secondary_color,
        width: 50,
        height: 50,
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        right: 30,
    }
});

export default ViewImageScreen;