import React from "react";
import {Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Icon
        style={styles.closeIcon}
        name="close"
        color={colors.white}
        size={35}></Icon>
      <Icon
        style={styles.deleteIcon}
        name="trash-can-outline"
        color={colors.white}
        size={35}></Icon>
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
    position: "absolute",
    top: 30,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
