import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";
import { MainMenu } from "../common/MainMenu";

export const PageTemplate = () => {
  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <MainMenu />
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};
