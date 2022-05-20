import { Formik } from 'formik';
import CustomButton from '../../components/button';
import { useAuth } from '../../hooks/auth';
import { registerValidationSchema } from './registerValidationSchema';
import { Brand, ButtonContainer, ConfirmPasswordInput, Container, EmailInput, FormContainer, ImageContainer, InputContainer, LinkContainer, LinkRegister, LoginContainer, Logo, LogoContainer, NomeInput, PasswordInput, Title } from './styles';



function UserRegister() {
  const { loading } = useAuth();
  return (
    <Container>
      <LoginContainer>
        <Title>Cadastra-se</Title>
        <FormContainer>
          <InputContainer>
            <Formik
              initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
              validateOnBlur={true}
              validateOnChange={false}
              validationSchema={
                registerValidationSchema
              }
              onSubmit={(values, { setSubmitting }) => {
                // função para cadastrar
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
                  <form>
                    <NomeInput value={values.name} onChange={handleChange('name')} tooltip={errors.name} error={Boolean(touched.name && errors.name)} onBlur={handleBlur('name')} />
                    <EmailInput value={values.email} onChange={handleChange('email')} tooltip={errors.email} error={Boolean(touched.email && errors.email)} onBlur={handleBlur('email')} />
                    <PasswordInput value={values.password} onChange={handleChange('password')} tooltip={errors.password} error={Boolean(touched.password && errors.password)} onBlur={handleBlur('password')} />
                    <ConfirmPasswordInput value={values.confirmPassword} onChange={handleChange('confirmPassword')} tooltip={errors.confirmPassword} error={Boolean(touched.confirmPassword && errors.confirmPassword)} onBlur={handleBlur('confirmPassword')} />
                  </form>

                  <ButtonContainer>
                    <CustomButton disabled={loading} onClickButton={handleSubmit} height={80} textColor="fff" color="164C64" text={loading ? "Loading..." : "CADASTRAR"} />
                  </ButtonContainer>
                </>
              )}
            </Formik>
          </InputContainer>
        </FormContainer>
        <LinkContainer>
          <LinkRegister>Não Tenho Cadastro</LinkRegister>
        </LinkContainer>
      </LoginContainer>
      <LogoContainer>
        <ImageContainer>
          <Logo />
          <Brand />
        </ImageContainer>
      </LogoContainer>
    </Container>
  )
}

export default UserRegister;

