import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function AppListItem({title, subTitle, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  detailsContainer: {
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.medium,
  },
});
