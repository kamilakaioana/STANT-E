import { SearchIcon } from "../../icons";
import { Button, Container, Input, InputContainer } from "./styles";

export interface IinputProps {
  placeholder: string;
  fontSize?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  name?: string;
  onSubmit?: () => void;
  showButton?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function SearchInput(props: IinputProps) {
  return (
    <Container>
      <InputContainer>
        <Input
          placeholder={props.placeholder}
          height={66}
          fontSize={props.fontSize}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          type="search"
          showButton={props.showButton}
          onBlur={props.onBlur}
        />
      </InputContainer>
      {props.showButton ? (
        <Button onClick={props.onSubmit}>
          <img src={SearchIcon} alt="search" />
        </Button>
      ) : null}
    </Container>
  );
}

export default SearchInput;
