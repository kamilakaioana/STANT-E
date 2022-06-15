import {
  Container,
  Error,
  ErrorContainer,
  Label,
  LabelContainer,
  TextArea,
} from "./styles";

export interface ITextAreaProps {
  value: string;
  placeholder: string;
  rows: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  tooltip?: string;
  error?: boolean;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  disabled?: boolean;
  label?: string;
}
const CustomTextArea: React.FC<ITextAreaProps> = (props) => {
  return (
    <Container>
      {props.label ? (
        <LabelContainer style={{ textAlign: "start", display: "flex" }}>
          <Label> {props.label} </Label>
        </LabelContainer>
      ) : null}
      <TextArea
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        rows={props.rows}
        placeholder={props.placeholder}
        error={props.error}
        name={props.name}
        disabled={props.disabled}
      />
      <ErrorContainer>
        <Error> {props.error ? props.tooltip : ""}</Error>
      </ErrorContainer>
    </Container>
  );
};

export default CustomTextArea;
