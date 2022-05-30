import { isEditable } from "@testing-library/user-event/dist/utils";
import { Formik } from "formik";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomFileInput from "../../components/inputs/fileInput";
import DeleteConfimModal from "../../components/modais/DeleteConfimModal";
import LoadingModal from "../../components/modais/Loading";
import CustomTextArea from "../../components/textArea";
import { TextArea } from "../../components/textArea/styles";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { IBook } from "../../interfaces";
import BookService from "../../services/bookService";
import { registerBookValidationSchema } from "./registerBookValidationSchema";
import {
  AddImageContainer,
  AuthorInput,
  ButtonContainer,
  ButtonExcluirContainer,
  ButtonSalveContainer,
  CancelarContainer,
  CancelarEdicao,
  CheckedIconLidos,
  Container,
  Content,
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
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDeleteBook, setLoadingDeleteBook] = useState<boolean>(false);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { bookId } = useParams();
  const [file, setFile] = useState<string | ArrayBuffer | null>();
  const [previewImg, setPreviewImg] = useState<string>();
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const { user } = useAuth();
  const [lidosChecked, setLidosChecked] = useState<boolean>(true);
  const [favoritos, setFavoritos] = useState<boolean>(false);
  // const [haLivroSelecionado, setHaLivroSelecionado] = useState<boolean>(true);
  const [livroSelecionado, setLivroSelecionado] = useState<IBook>({} as IBook);
  const [editable, setEditable] = useState<boolean>(false);
  console.log("um livro vazio", Boolean(livroSelecionado));
  const isEditable: boolean = editable && Boolean(bookId);
  console.log("isEditable", isEditable);
  const imageBase64 = typeof file === "string" ? file : "";
  const disabled: boolean = Boolean(bookId) ? !editable : false;
  const loadBook = useCallback(async (bookId: string) => {
    const book = await BookService.getOne(bookId);
    setLivroSelecionado(book);
  }, []);

  useEffect(() => {
    bookId && loadBook(bookId);
  }, [bookId, loadBook]);

  console.log("renderizou cadastro");

  const initialValues = useMemo(
    () => ({
      title: livroSelecionado.title ?? "",
      author: livroSelecionado.author ?? "",
      description: livroSelecionado.description ?? "",
      image: livroSelecionado.image ?? "",
      clientId: livroSelecionado.image ?? "",
    }),
    [
      livroSelecionado.author,
      livroSelecionado.description,
      livroSelecionado.image,
      livroSelecionado.title,
      // loadBook(),
    ]
  );
  // const seDataTest = () => {

  // };

  const handleDeleteBook = useCallback(async () => {
    if (!bookId) return;
    setLoadingDeleteBook(true);
    BookService.deleteBook(bookId);
    navigate("/");
    setLoadingDeleteBook(false);
    // @ TODO CRIAR TOAST INFORMANDO QUE FOI EXCLUIDO COM SUCESSO
  }, [bookId, navigate]);

  // @ TODO verificar desabilitar botao loading ao cadastrar
  const handleSubmitDisabled = (): boolean => {
    if (loading === true) return true;
    if (bookId) {
      if (editable) return false;
      if (editable === false) return true;
    }
    // if (!bookId) {

    //   return loading;
    // }
    return false;
  };
  return (
    <>
      <Container>
        {Boolean(bookId) ? (
          <>
            <LivrosLidosContainer
              onClick={() => setLidosChecked((value) => !value)}
            >
              {lidosChecked ? <CheckedIconLidos /> : <UncheckedIconLidos />}
              <LivrosLidos>Livros lidos</LivrosLidos>
            </LivrosLidosContainer>
            <Options>
              <RemoverContainer onClick={() => setFavoritos((value) => !value)}>
                {favoritos ? (
                  <HeartIconRed selected={favoritos} />
                ) : (
                  <HeartIconGray selected={favoritos} />
                )}
                <Remover selected={favoritos}>
                  {favoritos ? "Remover favoritos" : "Adicionar favoritos"}
                </Remover>
              </RemoverContainer>
              <CancelarContainer>
                <EditIcon />
                <CancelarEdicao onClick={() => setEditable((value) => !value)}>
                  {isEditable ? "Cancelar edição" : "Editar"}
                </CancelarEdicao>
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
              {previewImg ? <img src={imageBase64} alt="book" /> : <Logo />}
            </ImgContent>
            <CustomFileInput setFile={setFile} />
          </AddImageContainer>
          {/* interface ICustomToastProps {
  description?: string;
  title?: string;
  type?: string;
} */}
          <Formik
            initialValues={initialValues}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={registerBookValidationSchema}
            enableReinitialize
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);

              const data: Partial<IBook> = {
                title: values.title,
                author: values.author,
                description: values.description,
                image: imageBase64,
                clientId: user._id ?? undefined,
              };
              BookService.create(data);
              showToast("warning", "eitaaa");
              // window.alert("foi");
              setLoading(false);
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
                  <TitleInput
                    value={values.title}
                    onChange={handleChange("title")}
                    tooltip={errors.title}
                    error={Boolean(touched.title && errors.title)}
                    onBlur={handleBlur("title")}
                    type="text"
                    disabled={disabled}
                  />
                  <AuthorInput
                    value={values.author}
                    onChange={handleChange("author")}
                    tooltip={errors.author}
                    error={Boolean(touched.author && errors.author)}
                    onBlur={handleBlur("author")}
                    type="text"
                    disabled={disabled}
                  />
                  <CustomTextArea
                    placeholder="Descrição"
                    name="description"
                    rows={5}
                    value={values.description}
                    onChange={handleChange("description")}
                    tooltip={errors.description}
                    error={Boolean(touched.description && errors.description)}
                    onBlur={handleBlur("description")}
                    disabled={disabled}
                  />

                  <ButtonContainer>
                    <ButtonExcluirContainer>
                      <ExcluirButton
                        onClickButton={() =>
                          bookId ? setModalConfirm(true) : navigate("/")
                        }
                        secondary
                        text={livroSelecionado ? "EXCLUIR" : "CANCELAR"}
                        disabled={loadingDeleteBook}
                      />
                    </ButtonExcluirContainer>
                    <ButtonSalveContainer>
                      <SalveButton
                        text={bookId ? "SALVAR" : "CADASTRAR"}
                        onClickButton={handleSubmit}
                        disabled={handleSubmitDisabled()}
                      />
                    </ButtonSalveContainer>
                  </ButtonContainer>
                </InputContainer>
              </>
            )}
          </Formik>
        </Content>
      </Container>
      <DeleteConfimModal
        modalVisible={modalConfirm}
        handleDelete={() => handleDeleteBook()}
        handleCancel={() => setModalConfirm(false)}
      />
    </>
  );
}

export default BookRegister;
