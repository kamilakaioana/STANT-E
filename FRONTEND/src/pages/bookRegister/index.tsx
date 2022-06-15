import { Formik } from "formik";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeartButton from "../../components/HeartButton";
import CustomFileInput from "../../components/inputs/fileInput";
import DeleteConfimModal from "../../components/modais/DeleteConfimModal";
import CustomTextArea from "../../components/textArea";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { IBook, IResponse } from "../../interfaces";
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
  ImgContainer,
  LivrosLidosContent,
  Img,
} from "./styles";

function BookRegister() {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDeleteBook, setLoadingDeleteBook] = useState<boolean>(false);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { bookId } = useParams();
  const [file, setFile] = useState<string | ArrayBuffer | null>();
  // const [res, setRes] = useState<IResponse>();

  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const { user } = useAuth();
  const [lidosChecked, setLidosChecked] = useState<boolean>(true);
  const [favoritos, setFavoritos] = useState<boolean>(false);
  // const [haLivroSelecionado, setHaLivroSelecionado] = useState<boolean>(true);
  const [livroSelecionado, setLivroSelecionado] = useState<IBook>({} as IBook);
  const [editable, setEditable] = useState<boolean>(false);

  const isEditable: boolean = editable && Boolean(bookId);

  const imageBase64 = typeof file === "string" ? file : "";
  const disabled: boolean = Boolean(bookId) ? !editable : false;
  const loadBook = useCallback(async (bookId: string) => {
    const book = await BookService.getOne(bookId);
    setLivroSelecionado(book);
  }, []);

  useEffect(() => {
    bookId && loadBook(bookId);
  }, [bookId, loadBook]);

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
    ]
  );

  const handleDeleteBook = useCallback(async () => {
    if (!bookId) return;
    setLoadingDeleteBook(true);
    const res = await BookService.deleteBook(bookId);
    res.success === true
      ? showToast(
          "info",
          "Livro foi deletado!",
          "O livro selecionado foi deletado permanentemente"
        )
      : showToast(
          "danger",
          "Erro ao deletar o livro",
          "Não foi possivel deletar o livro, por favor tente novamente mais tarde."
        );
    navigate("/");
    setLoadingDeleteBook(false);
  }, [bookId, navigate, showToast]);

  // @ TODO verificar desabilitar botao loading ao cadastrar
  const handleSubmitDisabled = (): boolean => {
    if (loading === true) return true;
    if (bookId) {
      if (editable) return false;
      if (editable === false) return true;
    }
    return false;
  };

  const sourceImage = useMemo((): string => {
    if (bookId && livroSelecionado.image)
      return `data:image/gif;base64,${livroSelecionado.image}`;
    if (imageBase64) return `data:image/gif;base64,${imageBase64}`;
    return "";
  }, [bookId, imageBase64, livroSelecionado.image]);

  const handleFavoriteBook = async (bookId: string) => {
    const res = await BookService.UpdateFavoriteBookbyId(bookId);

    if (res.success === false) {
      showToast("danger", "Ocorreu um erro ao realizar a ação", res.msg);
    }

    if (res.success === true && res.action === "ADD") {
      showToast("success", "Livro favoritado", res.msg);
      setFavoritos(true);
    }
    if (res.success === true && res.action === "REMOVE") {
      showToast("info", "O livro retirado dos favoritos", res.msg);
      setFavoritos(false);
    }
  };
  return (
    <>
      <Container>
        {Boolean(bookId) ? (
          <>
            <LivrosLidosContainer>
              <LivrosLidosContent
                onClick={() => setLidosChecked((value) => !value)}
              >
                {lidosChecked ? <CheckedIconLidos /> : <UncheckedIconLidos />}
                <LivrosLidos>Livros lidos</LivrosLidos>
              </LivrosLidosContent>
            </LivrosLidosContainer>
            <Options>
              <RemoverContainer
                onClick={() => handleFavoriteBook(bookId ? bookId : "")}
              >
                <HeartButton favorite={favoritos} />
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
            {sourceImage && sourceImage !== "" ? (
              <ImgContainer>
                <Img src={sourceImage} />
              </ImgContainer>
            ) : (
              <ImgContent>
                <Logo />
              </ImgContent>
            )}
            <CustomFileInput setFile={setFile} />
          </AddImageContainer>

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
                clientId: user._id,
              };
              let res: IResponse;

              if (bookId) {
                res = await BookService.updateBookById(bookId, data);
              } else {
                res = await BookService.create(data);
              }
              if (res.success === true) {
                showToast("success", "Sucesso!", res.msg);
                navigate("/");
              } else {
                showToast("danger", "Erro ao cadastrar o livro", res.msg);
              }

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
                    label="Titulo"
                  />
                  <AuthorInput
                    value={values.author}
                    onChange={handleChange("author")}
                    tooltip={errors.author}
                    error={Boolean(touched.author && errors.author)}
                    onBlur={handleBlur("author")}
                    type="text"
                    disabled={disabled}
                    label="Autor"
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
                    label="Descrição"
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
