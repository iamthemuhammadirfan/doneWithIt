import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {Constants} from "react-native-unimodules";
export default function AppScreen({children, style}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
