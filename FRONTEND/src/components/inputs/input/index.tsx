import { Container, Error, ErrorContainer, Input } from "./styles";

export interface IinputProps {
  placeholder: string;
  height?: number;
  fontSize?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  tooltip?: string;
  error?: boolean;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function CustomInput(props: IinputProps) {
  return (
    <Container>
      <Input
        placeholder={props.placeholder}
        height={props.height}
        fontSize={props.fontSize}
        value={props.value}
        onChange={props.onChange}
        error={props.error}
        name={props.name}
        type={props.type}
        onBlur={props.onBlur}
      />
      <ErrorContainer>
        <Error> {props.error ? props.tooltip : ""}</Error>
      </ErrorContainer>
    </Container>
  );
}

export default CustomInput;
