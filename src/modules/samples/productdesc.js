import React from "react";
import { Button } from "@material-ui/core";

export const ProductDescription = (props) => {
  const description = props.description;
  const price = props.price;
  const title = props.title;
  const productId = props.id;
  const ordertotal = props.ordertotal;
  const setordertotal = props.setordertotal; //A function!

  function handleClick(e) {
    console.log(e);
    setordertotal(ordertotal + price);
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button onClick={handleClick}>Add To Order</button>
    </div>
  );
};
