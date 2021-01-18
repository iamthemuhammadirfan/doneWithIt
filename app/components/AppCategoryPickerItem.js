import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import AppIcon from "./AppIcon";
import AppText from "./AppText";
export default function AppCategoryPickerItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppIcon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={80}
        />
        <AppText style={styles.text}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 5,
  },
});
