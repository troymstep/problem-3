import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { StatefulSwitch } from "../modules/samples/StatefulSwitch";

// define our initial state for our form
const initialValues = {
  username: "",
  phonenumber: "",
  email: "",
};

// simple validation

const validationSchema = yup.object({
  username: yup.string().required().min("3").label("Name"), 
  phonenumber: yup.string().required().min("10").max("10").label("Cell Phone Number"), 
  email: yup.string().required().label("Email Address"), 
});

export const SimpleForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Grid item xs={12}>
          <TextField
            id="username"
            label="Name"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            id="phonenumber"
            label="Cell Phone Number"
            variant="outlined"
            value={values.phonenumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.phonenumber}
            helperText={errors.phonenumber}
          />
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item>
          <StatefulSwitch />
        </Grid>
        <Grid item>
          <Button type="submit">Submit</Button>
        </Grid>
      </Container>
    </form>
  );
};
