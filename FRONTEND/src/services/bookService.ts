import { AxiosResponse } from "axios";
import { IResponse } from "../interfaces";

import { api } from "./api";

interface IResponseFavoriteBook extends IResponse {
  action: "ADD" | "REMOVE" | "ERROR";
}

class BooksService {
  public async getAll() {
    try {
      const res = await api.get("/api/livros");
      return res.data;
    } catch (error: any) {
      console.log(error);
      return [];
    }
  }
  public async getByLoggedUser() {
    try {
      const res = await api.get("/api/livros/usuario");
      console.log("res", res);
      return res.data.books;
    } catch (error: any) {
      console.log(error);
      return [];
    }
  }
  public async getFavorites() {
    try {
      const res = await api.get("/api/livros/favoritos");
      return res.data.books;
    } catch (error: any) {
      console.log(error);
      return [];
    }
  }

  public async getRead() {
    try {
      const res = await api.get("/api/livros/lidos");
      return res.data.books;
    } catch (error: any) {
      console.log(error);
      return [];
    }
  }
  public async UpdateFavoriteBookbyId(
    id: string
  ): Promise<IResponseFavoriteBook> {
    try {
      const res = await api.put(`/api/livros/update-favorite/${id}`);

      return res.data.book.favorite === true
        ? {
            msg: res.data.book?.msg || "Livro Adicionado aos favoritos!",
            success: true,
            action: "ADD",
          }
        : {
            msg: res.data.book?.msg || "Livro removido dos favoritos!",
            success: true,
            action: "REMOVE",
          };
    } catch (error: any) {
      console.log(error);
      return {
        msg:
          error?.response?.data?.book?.msg ||
          "Ocorreu um erro, não foi possível realizar essa ação.",
        success: false,
        action: "ERROR",
      };
    }
  }

  public async getOne(id: string) {
    try {
      const res = await api.get(`/api/livros/${id}`);
      return res.data;
    } catch (error: any) {
      console.log(error);
    }
  }

  public async create(data: any, img?: File): Promise<IResponse> {
    const postData = data;

    try {
      const res: AxiosResponse<any, any> = await api.post(
        "/api/livros",
        postData
      );

      return {
        msg: res.data.msg || "Livro criado com sucesso!",
        success: true,
      };
    } catch (error: any) {
      return {
        msg:
          error?.response?.data?.msg ||
          "Não foi possível realizar o cadastro do livro, tente novamente mais tarde",
        success: false,
      };
    }
  }

  public async updateBookById(id: string, data: any): Promise<IResponse> {
    const postData = data;

    try {
      const res: AxiosResponse<any, any> = await api.put(
        `/api/livros/${id}`,
        postData
      );

      return {
        msg: res.data.msg || "Livro atualizado com sucesso!",
        success: true,
      };
    } catch (error: any) {
      return {
        msg:
          error?.response?.data?.msg ||
          "Não foi possível atualizar o livro, tente novamente mais tarde",
        success: false,
      };
    }
  }

  public async deleteBook(id: string): Promise<IResponse> {
    try {
      const res: AxiosResponse<any, any> = await api.delete(
        `/api/livros/${id}`
      );
      return {
        msg: res.data.msg || "Livro deletado com sucesso!",
        success: true,
      };
    } catch (error: any) {
      console.log(error);
      return {
        msg:
          error?.response?.data?.msg ||
          "Não foi possível deletar o livro, tente novamente mais tarde.",
        success: false,
      };
    }
  }
}

const BookService = new BooksService();

export default BookService;
