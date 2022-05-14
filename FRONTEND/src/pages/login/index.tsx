import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/button';
import { useAuth } from '../../hooks/auth';
import { Brand, ButtonContainer, Container, EmailInput, FormContainer, ImageContainer, InputContainer, LinkContainer, LinkRegister, LoginContainer, Logo, LogoContainer, OrganizedBooksImg, PasswordInput } from './styles';


function Login() {
  const { user, signIn, loading } = useAuth();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    await signIn(email, password);

  }
  return (
    <Container>
      <LogoContainer>
        <ImageContainer>
          <Logo />
          <Brand />
        </ImageContainer>
      </LogoContainer>
      <LoginContainer>
        <FormContainer>
          <OrganizedBooksImg />
            <InputContainer>
            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputContainer>
          <ButtonContainer>
          <CustomButton onClickButton={handleLogin} height={80} color="164C64" text={loading ? "Loading..." : "ENTRAR"} />
          </ButtonContainer>
          <LinkContainer>
          <LinkRegister>Não Tenho Cadastro</LinkRegister>
          </LinkContainer>
        </FormContainer>
      </LoginContainer>
    </Container>


  )
}

export default Login;

