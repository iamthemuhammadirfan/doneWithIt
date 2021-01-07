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
import Icon from "react-native-vector-icons/FontAwesome";
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{fontFamily: "Arial", fontSize: 15}}>
            Login with Facebook
          </Text>
        </Icon.Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
