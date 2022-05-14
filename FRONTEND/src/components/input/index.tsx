import { Input } from "./styles";

export interface IinputProps {
  placeholder: string,
  height?: number;
  fontSize?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
}

function CustomInput(props: IinputProps) {

  return (
    <Input
      placeholder={props.placeholder}
      height={props.height}
      fontSize={props.fontSize} 
      value={props.value}
      onChange={props.onChange}/>
  )
}

export default CustomInput;