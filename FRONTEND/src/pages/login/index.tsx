import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/button';
import { Input } from '../../components/input/styles';
import { useAuth } from '../../hooks/auth';
import { Brand, Container, FormContainer, ImageContainer, InputContainer, Logo, LogoContainer, OrganizedBooksImg, PasswordInputContainer } from './styles';


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
      <InputContainer>

        <FormContainer>

          <OrganizedBooksImg />
          <form >

            <Input
              placeholder='E-mail'
              type={'email'}
              height={80}
              width={504}
              fontSize={24}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInputContainer>
              <Input
                placeholder='Senha'
                type={'password'}
                height={80}
                width={504}
                fontSize={24}
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </PasswordInputContainer>
          </form>
          <CustomButton onClickButton={handleLogin} width={504} height={80} color="164C64" text={loading ? "Loading..." : "ENTRAR"} />
          
          <div>
          
          <Link to={'/register'}>Não Tenho Cadastro</Link>
          </div>
        </FormContainer>
      </InputContainer>
    </Container>


  )
}

export default Login;

