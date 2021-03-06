import {
  Container,
  Error,
  ErrorContainer,
  Input,
  Label,
  LabelContainer,
} from "./styles";

export interface IinputProps {
  placeholder: string;
  fontSize?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  tooltip?: string;
  error?: boolean;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  label?: string;
}

function CustomInput(props: IinputProps) {
  return (
    <div>
      {props.label ? (
        <LabelContainer>
          <Label> {props.label} </Label>
        </LabelContainer>
      ) : null}

      <Container>
        <Input
          placeholder={props.placeholder}
          fontSize={props.fontSize}
          value={props.value}
          onChange={props.onChange}
          error={props.error}
          name={props.name}
          type={props.type}
          onBlur={props.onBlur}
          disabled={props.disabled}
        />

        <ErrorContainer>
          <Error> {props.error ? props.tooltip : ""}</Error>
        </ErrorContainer>
      </Container>
    </div>
  );
}

export default CustomInput;
