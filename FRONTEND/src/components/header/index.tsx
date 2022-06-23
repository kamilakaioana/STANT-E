import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useSearch } from "../../hooks/search";
import { pages } from "../../utils/headerUtils";
import LeftNav from "../LeftNav";
import {
  Button,
  Container,
  Logo,
  LogoContainer,
  MenuContainer,
  CustomBurger,
} from "./styles";

function Header() {
  const location = useLocation();
  const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("/");
  const { signOut, loadUser } = useAuth();
  const { clearSearchData } = useSearch();

  const navigate = useNavigate();

  const handlePress = (rota: string, id: string) => {
    const sairRoute = pages[4].id;
    if (id === sairRoute) {
      signOut();
      return;
    }
    clearSearchData();
    navigate(rota);
    setSelected(rota);
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const rotaSelecionada = `/${location.pathname.split("/")?.[1]}`;
    setSelected(rotaSelecionada);
  }, [location.pathname]);

  return (
    <div>
      <Container>
        <LogoContainer>
          <Logo />
          <CustomBurger
            onClick={() => setNavBarOpen(!navBarOpen)}
            open={navBarOpen}
          />
        </LogoContainer>
        <MenuContainer>
          {pages.map(({ id, name, path }) => (
            <Button
              selectedTab={path === selected}
              key={id}
              onClick={() => handlePress(path, id)}
            >
              {name}
            </Button>
          ))}
        </MenuContainer>
      </Container>
      <LeftNav open={navBarOpen} />
    </div>
  );
}

export default Header;
