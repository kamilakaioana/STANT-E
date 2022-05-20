import { AxiosResponse } from 'axios';
import { IResponse } from '../interfaces';
import { IUserRegister } from '../pages/userRegister';
import {api} from './api';

class UsersService {
  
  public async register(
    postData: IUserRegister,
  ): Promise<IResponse> {
 
    try {
      const res: AxiosResponse<any, any> = await api.post('/api/users', postData)
      return {
        msg: res.data.msg || 'Usuário criado com sucesso!',
        success: true
      }

    } catch(error: any){
      return {
        msg: error?.response?.data?.msg || 'Não foi possível realizar o cadastro.',
        success: false
      }
    }
  }
}

const UserService = new UsersService();

export default UserService;