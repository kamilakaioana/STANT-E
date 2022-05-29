import { Formik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomInputFile from "../../components/inpuFile";
import { useAuth } from "../../hooks/auth";
import { IBook } from "../../interfaces";
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
  UncheckedIconLidos
} from "./styles";

function BookRegister() {
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [file, setFile] = useState<string | ArrayBuffer | null>();
  const [previewImg, setPreviewImg] = useState<string>();
  const { user } = useAuth();
  const [lidosChecked, setLidosChecked] = useState<boolean>(true);
  const [favoritos, setFavoritos] = useState<boolean>(false);
  const [haLivroSelecionado, setHaLivroSelecionado] = useState<boolean>(false);
  const imageBase64 = typeof file === 'string' ? file : '';

  const loadBook =  useCallback(async () => {
    const livro = await BookService.getOne(bookId ?? "");
    return livro;
  }, [bookId]);

   useEffect(() => {
    console.log("bookId", bookId);
    loadBook();
  }, [bookId, loadBook]);

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
            <ImgContent>
            { previewImg ? <img src={imageBase64} alt="image book"/> : <Logo />}
            </ImgContent>
            <CustomInputFile setFile={setFile}/>
          </AddImageContainer>

          <Formik
            initialValues={{ title: "", author: "", description: "", image: "", clientId: "" }}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={registerBookValidationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
             
              const data: Partial<IBook> = {
                title: values.title,
                author: values.author,
                description: values.description,
                image: imageBase64,
                clientId: user._id ?? undefined,
              };
         
              BookService.create(data)
         
              window.alert('foi')
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
                    value={values.author}
                    onChange={handleChange("author")}
                    tooltip={errors.author}
                    error={Boolean(touched.author && errors.author)}
                    onBlur={handleBlur("author")}
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
                        text={haLivroSelecionado ? "EXCLUIR" : "CANCELAR"}
                      />
                    </ButtonExcluirContainer>
                    <ButtonSalveContainer>
                      <SalveButton
                        textColor="164C64"
                        height={80}
                        color="fff"
                        text={haLivroSelecionado ? "SALVAR" : "CADASTRAR"}
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
