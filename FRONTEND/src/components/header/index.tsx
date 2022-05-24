import { render } from "@testing-library/react"
import {  useNavigate} from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Item, Logo, Container, MenuContainer, LogoContainer } from "./styles";





function Header() {
  const { signOut} = useAuth();
  const navigate = useNavigate() 


  const logoutLink = () => {
    signOut()
  
    // window.location.reload()
    // navigate('/login')
    // props.history.push()
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
  // {
  //   id: '5',
  //   name: 'Sair',
  //   path: '/login',
  // }
];

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
        <button onClick={() => logoutLink()}>'Sair'</button>
      </MenuContainer>

    </Container>
  )
}

export default Header;

