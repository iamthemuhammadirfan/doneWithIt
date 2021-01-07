import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import colors from "../config/colors";
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.primary,
    top: 15,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.secondary,
    top: 15,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
