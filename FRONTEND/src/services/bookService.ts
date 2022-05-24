import { IBook } from '../interfaces';
import { api } from './api';

class BooksService {

  public async getAll() {

    try {
    const res = await api.get('/api/livros')
    return res.data;

    } catch (error: any) {
      console.log(error)
    }
  }

  public async getOne(id: string) {

    try {
    const res = await api.get(`/api/livros/${id}`)
    return res.data;

    } catch (error: any) {
      console.log(error)
    }
  }
}

const BookService = new BooksService();

export default BookService;