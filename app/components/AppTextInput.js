import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import defaultStyles from "../config/styles";
export default function AppTextInput({icon, width = "100%", ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Icon
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholderTextColor={defaultStyles.colors.medium}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  icon: {marginRight: 10},
});
