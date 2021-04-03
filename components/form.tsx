import {
  Button,
  Grid,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import {AccountCircle} from '@material-ui/icons'
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { MyField } from "./myfield";
import "tailwindcss/tailwind.css";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div className="max-w-sm p-10 mx-auto flex flex-col shadow-lg space-y-4 bg-gray-50 rounded-xl">
            <Field
              name="firstName"
              placeholder="first name"
              component={MyField}
            />
            <Field
              name="lastName"
              placeholder="last name"
              component={MyField}
            />
            <Field name="email" placeholder="email" component={MyField} />
            <div className="space-y-1 self-center">
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
          <pre className="text-center">{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
