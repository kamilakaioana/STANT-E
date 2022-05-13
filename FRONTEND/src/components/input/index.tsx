import { Input } from "./styles";

export interface IinputProps {
  placeholder: string,
  height: number;
  width: number;
  fontSize: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
}

function CustomInput(props: IinputProps) {

  return (
    <Input
      placeholder={props.placeholder}
      width={props.width} height={props.height}
      fontSize={props.fontSize} 
      value={props.value}
      onChange={props.onChange}/>
  )
}

export default CustomInput;