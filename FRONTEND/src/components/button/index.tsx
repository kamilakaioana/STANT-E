import { Button } from "./styles";

export interface IButtonProps {
  onClickButton?: () => void;
  height?: number;
  color?: string;
  text?: string;
  textColor?: string;
  disabled?: boolean;
  secondary?: boolean;
}

function CustomButton({
  onClickButton,
  height,
  color,
  text,
  textColor,
  disabled,
  secondary,
}: IButtonProps) {
  return (
    <Button
      onClick={onClickButton}
      height={height}
      color={color}
      textColor={textColor}
      disabled={disabled}
      secondary={secondary}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
