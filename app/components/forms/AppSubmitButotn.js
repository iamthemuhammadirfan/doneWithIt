import React from "react";
import {useFormikContext} from "formik";

import AppButton from "../AppButton";

export default function AppSubmitButotn({title}) {
  const {handleSubmit} = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}
