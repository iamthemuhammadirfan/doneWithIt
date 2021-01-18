import React from "react";
import {StyleSheet} from "react-native";
import * as Yup from "yup";
import AppCategoryPickerItem from "../components/AppCategoryPickerItem";
import AppScreen from "../components/AppScreen";
import {
  AppForm,
  AppSubmitButotn,
  AppFormField,
  AppFormPicker,
} from "../components/forms";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  {label: "Furniture", value: 1, backgroundColor: "red", icon: "apps"},
  {label: "Clothing", value: 2, backgroundColor: "green", icon: "email"},
  {label: "Camera", value: 3, backgroundColor: "dodgerblue", icon: "lock"},
];
export default function ListEditScreen() {
  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}>
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          name="price"
          keyboardType="numeric"
          placeholder="Price"
          maxLength={8}
          width="40%"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={AppCategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
        />
        <AppSubmitButotn title="Post" />
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
