import { Button } from "./styles";

export interface IButtonProps {
  onClickButton?: () => void;
  height?: number;
  color?: string;
  text?: string;
  textColor?: string;
  disabled?: boolean;
  secondary?: boolean;
  colorHover?: string;
  fontSize?: number;
  borderRadius?: number;
}

function CustomButton({
  onClickButton,
  height,
  color,
  text,
  textColor,
  disabled,
  secondary,
  fontSize,
  borderRadius,
}: IButtonProps) {
  return (
    <Button
      onClick={onClickButton}
      height={height}
      color={color}
      textColor={textColor}
      disabled={disabled}
      secondary={secondary}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
