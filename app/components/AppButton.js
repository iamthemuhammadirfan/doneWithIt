import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../config/colors";

export default function AppButton({title, onPress, color = "primary"}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.light,
  },
});
