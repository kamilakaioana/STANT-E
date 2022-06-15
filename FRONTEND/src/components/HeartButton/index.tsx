import React from "react";
import { HeartIconGray, HeartIconRed } from "./styles";

interface IHeartButton {
  favorite: boolean;
  onClick?: (e: string) => void;
}

const HeartButton: React.FC<IHeartButton> = ({ favorite, onClick }) => {
  return (
    <div onClick={() => onClick}>
      {favorite ? <HeartIconRed /> : <HeartIconGray />}
    </div>
  );
};

export default HeartButton;
