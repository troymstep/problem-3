import { Grid, Typography } from "@material-ui/core";
import { ExampleForm } from "../modules/samples/ExampleForm";

export const ExampleFormPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h1">An Example Form</Typography>
      </Grid>
      <Grid item xs={12}>
        <ExampleForm />
      </Grid>
    </>
  );
};
