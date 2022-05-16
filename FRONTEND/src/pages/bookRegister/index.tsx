import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddImageContainer, ButtonContainer, Container, DescriptionInput, ExcluirButton, InputContainer, SalveButton, TitleInput } from './styles';


function BookRegister() {

  const [title, setTitle] = useState<string>('')
  const [actor, setActor] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const navigate = useNavigate()



  return (
    <>
      <Container>
      <AddImageContainer>
        <p>ADD</p>
      </AddImageContainer>

      <InputContainer>
      <button style={{border: 'none'}}>Cancelar edição</button>
        <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* <ActorInput value={actor} onChange={(e) => setActor(e.target.value)} /> */}
        <DescriptionInput value={description} onChange={(e) => setDescription(e.target.value)} />
        <ButtonContainer>
        {/* <CustomButton onClickButton={() => console.log("cadastrei")} height={80} color="164C64" text="EXCLUIR"  />
        <CustomButton onClickButton={() => console.log("cadastrei")} height={80} color="164C64" text="SALVAR" /> */}
        <ExcluirButton onClickButton={() => console.log("cadastrei")} textColor="fff" height={80} color="164C64" text="EXCLUIR"  />
        <SalveButton onClickButton={() => console.log("cadastrei")} textColor="fff"  height={80} color="fff" text="SALVAR" />
      </ButtonContainer>
      </InputContainer>
   
      </Container>
      
     
      


    </>

  )
}

export default BookRegister;
