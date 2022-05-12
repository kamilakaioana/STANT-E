import CustomButton from '../../components/button';
import { Brand, Container, ImageContainer, InputContainer, Logo, LogoContainer } from './styles';


function Login() {

  return (
    <Container>
      <LogoContainer>
        <ImageContainer>
          <Logo />
          <Brand />
        </ImageContainer>
      </LogoContainer>
      <InputContainer>

        {/* <EmailInput/>
        <PasswordInput/> */}

         <form>
          <input placeholder='E-mail'/>
          <input placeholder='Senha'/>
         </form>
        <CustomButton onClickButton={() => console.log('oi')} width={504} height={80} color="164C64" text='ENTRAR'/>
         
      </InputContainer>
    </Container>


  )
}

export default Login;

