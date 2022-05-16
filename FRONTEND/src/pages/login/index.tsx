import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/button';
import { Formik } from 'formik';
import { IMensageLoginType, useAuth } from '../../hooks/auth';
import { Brand, ButtonContainer, Container, EmailInput, FormContainer, ImageContainer, InputContainer, LinkContainer, LinkRegister, LoginContainer, Logo, LogoContainer, OrganizedBooksImg, PasswordInput } from './styles';
import { loginValidationSchema } from './loginValidationSchema';

function Login() {
  const navigate = useNavigate() 
  const { signIn, loading } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    const loginResponse: IMensageLoginType = await signIn(email, password);
    if(loginResponse.success) {
      navigate("/")
    } else {
      window.alert(loginResponse.msg)
    }
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

          <Formik
            initialValues={{ email: '', password: '' }}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={
              loginValidationSchema
            }
            onSubmit={(values, { setSubmitting }) => {
                handleLogin(values.email, values.password)
                setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              touched,
            }) => (
              <>
                <InputContainer>
                  <form>
                    {/* <form onSubmit={handleSubmit}> */}
                    <EmailInput value={values.email} onChange={handleChange('email')} tooltip={errors.email} error={Boolean(touched.email && errors.email)} onBlur={handleBlur('email')} />
                    <PasswordInput value={values.password} onChange={handleChange('password')} tooltip={errors.password} error={Boolean(touched.password && errors.password)} onBlur={handleBlur('password')} />
                  </form>

                </InputContainer>
                <ButtonContainer>
                  <CustomButton disabled={loading} onClickButton={handleSubmit} height={80} textColor="fff" color="164C64" text={loading ? "Loading..." : "ENTRAR"} />
                </ButtonContainer>
              </>
            )}
          </Formik>
          <LinkContainer>
            <LinkRegister>Não Tenho Cadastro</LinkRegister>
          </LinkContainer>
        </FormContainer>
      </LoginContainer>
    </Container>

  )
}

export default Login;
