import React from "react";
import { Item, StyledBurger } from "./styles";

interface IBurguerButton {
  open: boolean;
  onClick: () => void;
}

const Burger: React.FC<IBurguerButton> = ({ onClick, open }) => {
  return (
    <>
      <StyledBurger onClick={onClick}>
        <Item open={open} />
        <Item open={open} />
        <Item open={open} />
      </StyledBurger>
    </>
  );
};

export default Burger;
