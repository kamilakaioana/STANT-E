import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button";
import { Formik } from "formik";
import { IMensageLoginType, useAuth } from "../../hooks/auth";
import {
  Brand,
  ButtonContainer,
  Container,
  EmailInput,
  FormContainer,
  ImageContainer,
  InputContainer,
  LinkContainer,
  LinkRegister,
  LoginContainer,
  Logo,
  LogoContainer,
  OrganizedBooksImg,
  PasswordInput,
} from "./styles";
import { loginValidationSchema } from "./loginValidationSchema";
import { useToast } from "../../hooks/toast";
import { StringsResources } from "../../utils/stringsResources";

const { ENTRAR, NAO_TENHO_CADASTRO, CARREGANDO } = StringsResources.BUTTONS;
function Login() {
  const navigate = useNavigate();
  const { signIn, loading } = useAuth();
  const { showToast } = useToast();

  const handleLogin = async (email: string, password: string) => {
    const loginResponse: IMensageLoginType = await signIn(email, password);
    if (loginResponse.success) {
      navigate("/");
      showToast("success", "Sucesso ao logar!", loginResponse.msg);
    } else {
      showToast("danger", "Erro ao logar!", loginResponse.msg);
    }
  };
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
            initialValues={{ email: "", password: "" }}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleLogin(values.email, values.password);
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
                    <EmailInput
                      value={values.email}
                      onChange={handleChange("email")}
                      tooltip={errors.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur("email")}
                    />
                    <PasswordInput
                      value={values.password}
                      onChange={handleChange("password")}
                      tooltip={errors.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur("password")}
                    />
                  </form>
                </InputContainer>
                <ButtonContainer>
                  <CustomButton
                    disabled={loading}
                    onClickButton={handleSubmit}
                    height={60}
                    text={loading ? CARREGANDO : ENTRAR}
                  />
                </ButtonContainer>
              </>
            )}
          </Formik>
          <LinkContainer>
            <LinkRegister>{NAO_TENHO_CADASTRO}</LinkRegister>
          </LinkContainer>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;
