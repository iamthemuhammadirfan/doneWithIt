/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {Image, StyleSheet, View, Text} from "react-native";
import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AppScreen from "./app/components/AppScreen";
import AppIcon from "./app/components/AppIcon";
import AppListItem from "./app/components/AppListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
const App = () => {
  return <ListingScreen />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    paddingTop: 20,
    padding: 20,
  },
});

export default App;
