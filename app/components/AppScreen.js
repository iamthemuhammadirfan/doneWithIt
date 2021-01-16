import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
export default function AppScreen({children, style}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
