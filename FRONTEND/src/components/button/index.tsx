import { Button } from './styles';
import React from 'react';

export interface IButtonProps  {
  onClickButton?: () => void;
  height?: number;
  color?: string;
  text?: string;
  textColor?: string;
  disabled?: boolean;  
}

function CustomButton({ onClickButton,  height, color, text, textColor, disabled }: IButtonProps) {

  return (
    <Button onClick={onClickButton} height={height} color={color} textColor={textColor} disabled={disabled}>
      {text} 
    </Button>
  )
}

export default CustomButton;