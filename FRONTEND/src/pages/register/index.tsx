import { useState } from 'react';
import CustomButton from '../../components/button';
import { Input } from '../../components/input/styles';
import { useAuth } from '../../hooks/auth';
import { Brand, Container, FormContainer, ImageContainer, InputContainer, InputItemContainer, Logo, LogoContainer, PasswordInputContainer } from './styles';


function Register() {
  const { user, signIn } = useAuth();
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const handleLogin = () => {
    signIn(email, password);
  }
  return (
    <Container>
      <InputContainer>
        <FormContainer>
          <form >
          <InputItemContainer>
            <Input
              placeholder='Nome Completo'
              height={80}
              width={504}
              fontSize={24}
              value={name}
              onChange={(e) => setName(e.target.value)}
              
            />
            </InputItemContainer>
              <InputItemContainer>
              <Input
              placeholder='Email'
              height={80}
              width={504}
              fontSize={24}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </InputItemContainer>
             <InputItemContainer>
              <Input
              placeholder='Senha'
              height={80}
              width={504}
              fontSize={24}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />    
            </InputItemContainer>

            <PasswordInputContainer>
              <Input
                placeholder='Confirme sua senha'
                height={80}
                width={504}
                fontSize={24}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </PasswordInputContainer>
          </form>
          <CustomButton onClickButton={handleLogin} width={504} height={80} color="164C64" text='CADASTRAR' />
        </FormContainer>
      </InputContainer>
      <LogoContainer>
        <ImageContainer>
          <Logo />
          <Brand />
        </ImageContainer>
      </LogoContainer>
    </Container>
  )
}

export default Register;

