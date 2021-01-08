import React from "react";
import {StyleSheet, View} from "react-native";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
export default function AppListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
