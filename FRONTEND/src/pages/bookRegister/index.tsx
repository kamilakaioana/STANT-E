import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookService from '../../services/bookService';
import { ActorInput, AddImageContainer, ButtonContainer, ButtonExcluirContainer, ButtonSalveContainer, Container, Content, DescriptionInput, ExcluirButton, InputContainer, Logo, SalveButton, Title, TitleInput } from './styles';


function BookRegister() {

  const [title, setTitle] = useState<string>('')
  const [actor, setActor] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  // const []
  const navigate = useNavigate()
  const { bookId } = useParams();

  const loadBook = async () => {
    const livro = await BookService.getOne(bookId ?? '');
  } 

  useEffect(() => {
console.log("bookId", bookId)
  }, [])
  return (
    <>
      <Container>
     <Title>Cadastro</Title>
      <Content>
      <AddImageContainer>
        <Logo/>
      </AddImageContainer>

     
      <InputContainer>
      {/* <button style={{border: 'none'}}>Cancelar edição</button> */}
        <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
        <ActorInput value={actor} onChange={(e) => setActor(e.target.value)} />
        <DescriptionInput value={description} onChange={(e) => setDescription(e.target.value)} />
        <ButtonContainer>
          <ButtonExcluirContainer>
        <ExcluirButton onClickButton={() => console.log("cadastrei")} textColor="fff" height={80} color="164C64" text="EXCLUIR"  />
        </ButtonExcluirContainer>
        <ButtonSalveContainer>
        <SalveButton onClickButton={() => window.alert('entrei no livro ')} textColor="164C64"  height={80} color="fff" text="SALVAR" />
        </ButtonSalveContainer>
      </ButtonContainer>
      </InputContainer>
      </Content>
      </Container>
      
     
      


    </>

  )
}

export default BookRegister;
