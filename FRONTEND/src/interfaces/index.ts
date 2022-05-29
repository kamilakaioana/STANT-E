
export interface IResponse {
  msg: string,
  success: boolean,
}

export interface IBook {
  _id: string,
  title: string, 
  author: string,
  description: string | null,
  favorite: boolean,
  read: boolean,
  image: string,
  clientId: string;
}

