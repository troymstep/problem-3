import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import { useCart } from "../shoppingCart/CartContext";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const FoodItem = (item) => {
  const { id, title, description, imageMedium, price } = item;
  const cart = useCart();

  const onAddItem = (itemId) => cart.addItem(itemId);

  return (
    <StyledCard>
      <Grid
        container
        direction="column"
        style={{ height: "100%" }}
        alignContent="stretch"
      >
        <Grid item>
          <CardMedia
            component="img"
            height={200}
            image={imageMedium}
            alt={title}
          />
        </Grid>
        <Grid
          item
          container
          style={{ height: "calc(100% - 200px)" }}
          alignContent="stretch"
          justifyContent="space-between"
        >
          <CardContent>
            <Grid
              container
              direction="column"
              style={{ height: "100%", justifyContent: "space-between" }}
            >
              <Grid item>
                <Typography gutterBottom variant="h5">
                  {title}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {description}
                </Typography>
              </Grid>
              <Grid item container direction="column">
                <Typography
                  variant="h6"
                  element="div"
                  gutterBottom
                  align="right"
                >
                  ${price}
                </Typography>
                <Button onClick={() => onAddItem(id)}>Add Item</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </StyledCard>
  );
};
