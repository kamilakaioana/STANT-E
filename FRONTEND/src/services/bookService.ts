import { AxiosResponse } from "axios";
import { IResponse } from "../interfaces";

import { api } from "./api";

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

  public async getOne(id: string) {
    try {
      const res = await api.get(`/api/livros/${id}`);
      return res.data;
    } catch (error: any) {
      console.log(error);
    }
  }

  public async create(data: any, img?: File): Promise<IResponse> {
    // const postData = new FormData();
    // postData.append('title', data.title)
    // postData.append('author', data.author)
    // if (data.description )postData.append('description', data.description)
    // if (img) postData.append('image', img)
    const postData = data;
    // console.log("")
    try {
      const res: AxiosResponse<any, any> = await api.post(
        "/api/livros",
        postData
      );

      // const res = {data: {msg: "teste"}}
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
