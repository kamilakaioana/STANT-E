import { PlusIcon } from "./../../components/icons";
import { Container, PlusIconImg } from "./styles";

interface IPlusButtonProps {
  onClick: () => void;
}

const PlusButton: React.FC<IPlusButtonProps> = ({ onClick }) => {
  return (
    <Container>
      <PlusIconImg src={PlusIcon} alt="icon mais" onClick={onClick} />
    </Container>
  );
};

export default PlusButton;
