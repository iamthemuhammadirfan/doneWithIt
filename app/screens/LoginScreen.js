import React from "react";
import {Image, StyleSheet} from "react-native";
import * as Yup from "yup";
import AppScreen from "../components/AppScreen";
import {AppForm, AppFormField, AppSubmitButotn} from "../components/forms";
const validationShema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen() {
  return (
    <AppScreen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{email: "", password: ""}}
        validationSchema={validationShema}
        onSubmit={(values) => console.log(values)}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          icon="email"
          placeholder="Email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
        />
        <AppSubmitButotn title="Login" />
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
