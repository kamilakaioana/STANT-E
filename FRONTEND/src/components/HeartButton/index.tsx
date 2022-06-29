import React from "react";
import { HeartIconGray, HeartIconRed } from "./styles";

interface IHeartButton {
  favorite: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const HeartButton: React.FC<IHeartButton> = ({
  favorite,
  onClick,
  disabled,
}) => {
  return (
    <div onClick={disabled ? undefined : onClick}>
      {favorite ? <HeartIconRed /> : <HeartIconGray />}
    </div>
  );
};

export default HeartButton;
