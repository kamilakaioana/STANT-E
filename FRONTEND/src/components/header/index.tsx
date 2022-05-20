import { render } from "@testing-library/react"
import { Item, Logo, Container, MenuContainer, LogoContainer } from "./styles";

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
{
  id: '5',
  name: 'Sair',
  path: '/'
}
];

function Header () {
  return(
    <Container>
      <LogoContainer>
        <Logo/>
      </LogoContainer>

      

      <MenuContainer>
      {
        pages.map(({id, name, path}) => <Item to={path} key={id}>{name}</Item>)
      } 

      </MenuContainer>

   
    
    
 
    </Container>
  )

}

export default Header;