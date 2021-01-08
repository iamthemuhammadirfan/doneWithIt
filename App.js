/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import {StyleSheet, Switch} from "react-native";
import AppScreen from "./app/components/AppScreen";
import AppTextInput from "./app/components/AppTextInput";
const App = () => {
  const [isNew, setIsNew] = useState(false);
  return <AppScreen></AppScreen>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    paddingTop: 20,
    padding: 20,
  },
});

export default App;
