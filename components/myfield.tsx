import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import * as React from "react";

export const MyField: React.FC<FieldProps&TextFieldProps> = ({ placeholder, field }) => {
  return <TextField  placeholder={placeholder} {...field} />;
};
