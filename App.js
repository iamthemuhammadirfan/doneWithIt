/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import {StyleSheet} from "react-native";
import AppScreen from "./app/components/AppScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3},
];
const App = () => {
  const [category, setCategory] = useState(categories[2]);
  return (
    <AppScreen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        items={categories}
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    paddingTop: 20,
    padding: 20,
  },
});

export default App;
