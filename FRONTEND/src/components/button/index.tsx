import {Button} from './styles';
import React from 'react';

export interface IButtonProps {
  onClickButton: () => void;
  width: number;
  height: number;
  color: string;
  text: string;
}

function CustomButton({onClickButton, width, height, color, text}: IButtonProps, ) {

  return (
    <Button onClick={onClickButton} width={width} height={height} color={color}>
     {text}
    </Button>
  )


}

export default CustomButton;