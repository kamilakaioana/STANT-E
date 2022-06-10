import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button";
import { useToast } from "../../hooks/toast";
import UserService from "../../services/userService";
import { colorsNoHash } from "../../styles/colors";
import { StringsResources } from "../../utils/stringsResources";
import { registerValidationSchema } from "./registerValidationSchema";
import {
  Brand,
  ButtonContainer,
  ConfirmPasswordInput,
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
  NomeInput,
  PasswordInput,
  Title,
} from "./styles";

export type IUserRegister = {
  name: string;
  email: string;
  password: string;
};

const { CADASTRA_SE } = StringsResources.screens.USER_REGISTER;
const { USUARIO_CADASTRADO, ERRO_CADASTRAR } = StringsResources.TOASTS.TITLE;
const { LOADING, REGISTER, JA_TENHO_CADASTRO } = StringsResources.BUTTONS;
const { EMAIL, NAME, PASSWORD, REPEAT_PASSWORD } = StringsResources.LABELS;

function UserRegister() {
  const [loading, setLoading] = useState<boolean>();
  const { showToast } = useToast();
  const navigate = useNavigate();

  return (
    <Container>
      <LoginContainer>
        <Title>{CADASTRA_SE}</Title>
        <FormContainer>
          <InputContainer>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validateOnBlur={true}
              validateOnChange={false}
              validationSchema={registerValidationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setLoading(true);
                const data = {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                };
                const res = await UserService.register(data);

                if (res.success === true) {
                  showToast("success", USUARIO_CADASTRADO, res.msg);
                  navigate("/login");
                } else {
                  showToast("danger", ERRO_CADASTRAR, res.msg);
                }
                setSubmitting(false);
                setLoading(false);
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
                    <NomeInput
                      value={values.name}
                      onChange={handleChange("name")}
                      tooltip={errors.name}
                      error={Boolean(touched.name && errors.name)}
                      onBlur={handleBlur("name")}
                      label={NAME}
                    />
                    <EmailInput
                      value={values.email}
                      onChange={handleChange("email")}
                      tooltip={errors.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur("email")}
                      label={EMAIL}
                    />
                    <PasswordInput
                      value={values.password}
                      onChange={handleChange("password")}
                      tooltip={errors.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur("password")}
                      label={PASSWORD}
                    />
                    <ConfirmPasswordInput
                      value={values.confirmPassword}
                      onChange={handleChange("confirmPassword")}
                      tooltip={errors.confirmPassword}
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      onBlur={handleBlur("confirmPassword")}
                      label={REPEAT_PASSWORD}
                    />
                  </form>

                  <ButtonContainer>
                    <CustomButton
                      disabled={loading}
                      onClickButton={handleSubmit}
                      height={60}
                      textColor={colorsNoHash.fonts.white}
                      color={colorsNoHash.fonts.primary}
                      text={loading ? LOADING : REGISTER}
                    />
                  </ButtonContainer>
                </>
              )}
            </Formik>
          </InputContainer>
        </FormContainer>
        <LinkContainer>
          <LinkRegister>{JA_TENHO_CADASTRO}</LinkRegister>
        </LinkContainer>
      </LoginContainer>
      <LogoContainer>
        <ImageContainer>
          <Logo />
          <Brand />
        </ImageContainer>
      </LogoContainer>
    </Container>
  );
}

export default UserRegister;
