import { render } from "@testing-library/react"
import { useEffect } from "react";
import {  useNavigate} from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Item, Logo, Container, MenuContainer, LogoContainer } from "./styles";


function Header() {
  const { signOut, loadUser} = useAuth();


  const logoutLink = () => {
    signOut()

  }


const pages = [
  {
    id: '1',
    name: 'Home',
    path: '/'
  },
  {
    id: '2',
    name: 'Favoritos',
    path: '/favoritos'
  },
  {
    id: '3',
    name: 'Lidos',
    path: '/lidos'
  },
  {
    id: '4',
    name: 'Cadastrar',
    path: '/livro'
  },

];


useEffect(() => {
  loadUser()
}, [])

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        {
          pages.map(({ id, name, path }) => <Item to={path} key={id}>{name}</Item>
          )
        }
        <button style={{backgroundColor: 'transparent', border: 'none', fontSize: 20, color: '#fff', fontWeight: 'bolder', fontFamily: 'Times'}} onClick={() => logoutLink()}>Sair</button>
      </MenuContainer>

    </Container>
  )
}

export default Header;

