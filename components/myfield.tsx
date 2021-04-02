import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import * as React from "react";

function CamelCase2(text: string): string {
  var result: string = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}
export const MyField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
}) => {
  return (
    <TextField
      variant="outlined"
      label={CamelCase2(placeholder)}
      placeholder={placeholder}
      {...field}
    />
  );
};
