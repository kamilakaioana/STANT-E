import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookService from "../../services/bookService";
import { registerBookValidationSchema } from "./registerBookValidationSchema";
import {
  ActorInput,
  AddImageContainer,
  ButtonContainer,
  ButtonExcluirContainer,
  ButtonSalveContainer,
  CancelarContainer,
  CancelarEdicao,
  CheckedIconLidos,
  Container,
  Content,
  DescriptionInput,
  EditIcon,
  ExcluirButton,

  HeartIconGray,
  HeartIconRed,
  ImgContent,
  InputContainer,
  LivrosLidos,
  LivrosLidosContainer,
  Logo,
  Options,
  Remover,
  RemoverContainer,
  SalveButton,
  Title,
  TitleContainer,
  TitleInput,
  UncheckedIconLidos,
} from "./styles";

function BookRegister() {
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate();
  const { bookId } = useParams();

  const loadBook = async () => {
    const livro = await BookService.getOne(bookId ?? "");
    // setHaLivroSelecionado(livro);
    return livro;
  };
  const [lidosChecked, setLidosChecked] = useState<boolean>(true);
  const [favoritos, setFavoritos] = useState<boolean>(false);
  const [haLivroSelecionado, setHaLivroSelecionado] = useState<boolean>(true);

  useEffect(() => {
    console.log("bookId", bookId);
    loadBook();
  }, []);

  const handleAddImg = () => {
    //@ add img e converter base 64
  }
  return (
    <>
      <Container>
        {haLivroSelecionado ? (
          <>
            <LivrosLidosContainer
              onClick={() => setLidosChecked((value) => !value)}
            >
              {lidosChecked ? <CheckedIconLidos /> : <UncheckedIconLidos />}
              <LivrosLidos>Livros lidos</LivrosLidos>
            </LivrosLidosContainer>
            <Options>
              <RemoverContainer onClick={() => setFavoritos((value) => !value)}>
            
                {favoritos ? <HeartIconRed selected={favoritos}  /> : <HeartIconGray selected={favoritos}  />}
                <Remover selected={favoritos}>
                  Remover favoritos
                </Remover>
              </RemoverContainer>
              <CancelarContainer>
                <EditIcon />
                <CancelarEdicao>Cancelar edição</CancelarEdicao>
              </CancelarContainer>
            </Options>
          </>
        ) : (
          <TitleContainer>
            <Title>Cadastro</Title>
          </TitleContainer>
        )}
        <Content>
          <AddImageContainer>
            <ImgContent onClick={() => handleAddImg()}>
            <Logo />
            </ImgContent>
          </AddImageContainer>

          <Formik
            initialValues={{ title: "", actor: "", description: "" }}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={registerBookValidationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              const data = {
                title: values.title,
                actor: values.actor,
                description: values.description,
                // image: values.image,
              };
              window.alert(`valores ${data.title} ${data.actor}`);
              // const resposta = await UserService.register(data)
              // window.alert(resposta.msg)
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
                <InputContainer>
                  <TitleInput
                    value={values.title}
                    onChange={handleChange("title")}
                    tooltip={errors.title}
                    error={Boolean(touched.title && errors.title)}
                    onBlur={handleBlur("title")}
                  />
                  <ActorInput
                    value={values.actor}
                    onChange={handleChange("actor")}
                    tooltip={errors.actor}
                    error={Boolean(touched.actor && errors.actor)}
                    onBlur={handleBlur("actor")}
                  />
                  <DescriptionInput
                    value={values.description}
                    onChange={handleChange("description")}
                    tooltip={errors.description}
                    error={Boolean(touched.description && errors.description)}
                    onBlur={handleBlur("description")}
                  />

                  <ButtonContainer>
                    <ButtonExcluirContainer>
                      <ExcluirButton
                        onClickButton={() => console.log("cadastrei")}
                        textColor="fff"
                        height={80}
                        color="164C64"
                        text="EXCLUIR"
                      />
                    </ButtonExcluirContainer>
                    <ButtonSalveContainer>
                      <SalveButton
                        textColor="164C64"
                        height={80}
                        color="fff"
                        text="SALVAR"
                        onClickButton={handleSubmit}
                      />
                    </ButtonSalveContainer>
                  </ButtonContainer>
                </InputContainer>
              </>
            )}
          </Formik>
        </Content>
      </Container>
    </>
  );
}

export default BookRegister;
