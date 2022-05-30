import { Container, Error, ErrorContainer, TextArea } from "./styles";

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
}
const CustomTextArea: React.FC<ITextAreaProps> = (props) => {
  return (
    <Container>
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
