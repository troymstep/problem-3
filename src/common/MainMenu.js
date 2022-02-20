import { MenuItem, MenuList } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledItem = styled(MenuItem)`
  display: inline-block;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3rem;
  /* color: blue; */
  padding-right: 1rem;
  &.active {
    color: black;
  }
`;

export const MainMenu = () => {
  return (
    <nav>
      <MenuList>
        <StyledItem>
          <Link to="/">Home</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/page1">Page 1</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/simple-form">Simple Form</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/example-form">Registration Form</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/menu">Food Menu</Link>
        </StyledItem>
      </MenuList>
    </nav>
  );
};
