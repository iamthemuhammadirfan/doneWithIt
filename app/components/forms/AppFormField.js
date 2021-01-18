import React from "react";
import {useFormikContext} from "formik";
import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

export default function AppFormField({name, width, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
