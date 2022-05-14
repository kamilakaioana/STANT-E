import { Button } from './styles';

export interface IButtonProps {
  onClickButton: () => void;
  height: number;
  color: string;
  text: string;
}

function CustomButton({ onClickButton,  height, color, text }: IButtonProps,) {

  return (
    <Button onClick={onClickButton} height={height} color={color}>
      {text}
    </Button>
  )
}

export default CustomButton;