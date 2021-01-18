/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {StyleSheet} from "react-native";
import ListEditScreen from "./app/screens/ListEditScreen";
const App = () => {
  return <ListEditScreen />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    paddingTop: 20,
    padding: 20,
  },
});

export default App;
