
export interface IResponse {
  msg: string,
  success: boolean,
}

export interface IBook {
  _id: string,
  titulo: string, 
  autor: string,
  descricao: string | null,
  favorito: boolean,
  lido: boolean,
}

