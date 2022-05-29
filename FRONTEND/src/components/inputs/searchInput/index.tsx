import { SearchIcon } from "../../icons";
import { Button, Container, Input, InputContainer } from "./styles";

export interface IinputProps {
  placeholder: string;
  fontSize?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | (() => void);
  name?: string;
  onClick?: () => void;
  showButton?: boolean;
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
        />
      </InputContainer>
      {props.showButton ? (
        <Button onClick={props.onClick}>
          <img src={SearchIcon} alt="search" />
        </Button>
      ) : null}
    </Container>
  );
}

export default SearchInput;
