import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { SimpleForm } from "../modules/samples/SimpleForm";

export const SimpleFormPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h1">A Simple Form</Typography>
      </Grid>
      <Grid item xs={12}>
        <SimpleForm />
      </Grid>
    </>
  );
};
