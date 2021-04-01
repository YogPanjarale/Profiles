import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { MyField } from "./myfield";
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
        <div>
        <Form >
          <div>
            <Field
              name="firstName"
              placeholder="first name"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="lastName"
              placeholder="last name"
              component={MyField}
            />
          </div>
          <div>
            <Field name="email" placeholder="email" component={MyField} />
          </div>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
        </div>
      )}
    </Formik>
  );
};
