import { Grid, Typography } from "@material-ui/core";
import { foodItems } from "../data/foodItems";
import { FoodItem } from "../modules/foodMenu/FoodItem";

export const FoodMenu = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">Food Menu</Typography>
          <Typography gutterBottom>
            In irure occaecat ut non minim minim reprehenderit adipisicing irure
            irure quis commodo. Sint incididunt duis excepteur anim laborum
            nostrud adipisicing in irure adipisicing in velit. Ex sunt
            consectetur fugiat magna adipisicing.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {foodItems.map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} xl={2} lg={3}>
                <FoodItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
