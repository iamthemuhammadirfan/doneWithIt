import React from "react";
import {StyleSheet, ImageBackground, View, Image, Text} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.title}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    paddingVertical: 20,
    fontSize: 25,
  },
});
