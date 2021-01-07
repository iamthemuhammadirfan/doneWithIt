import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import AppListItem from "../components/AppListItem";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <AppListItem
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
          <AppListItem
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});
