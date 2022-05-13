import { useState } from 'react';
import CustomButton from '../../components/button';
import { Input } from '../../components/input/styles';
import { useAuth } from '../../hooks/auth';
import { Brand, Container, FormContainer, ImageContainer, InputContainer, Logo, LogoContainer, OrganizedBooksImg, PasswordInputContainer } from './styles';


function Login() {
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = () => {
    signIn(email, password);
  }
  return (
    <Container>
      <LogoContainer>
        <ImageContainer>
          <Logo />
          <Brand />
        </ImageContainer>
      </LogoContainer>
      <InputContainer>

        <FormContainer>

          <OrganizedBooksImg />
          <form >

            <Input
              placeholder='E-mail'
              height={80}
              width={504}
              fontSize={24}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInputContainer>
              <Input
                placeholder='Senha'
                height={80}
                width={504}
                fontSize={24}
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </PasswordInputContainer>
          </form>
          <CustomButton onClickButton={handleLogin} width={504} height={80} color="164C64" text='ENTRAR' />
        </FormContainer>
      </InputContainer>
    </Container>


  )
}

export default Login;

