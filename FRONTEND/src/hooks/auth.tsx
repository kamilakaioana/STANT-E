import {createContext, ReactNode, useContext, useState} from "react";
import {api} from '../services/api'
import { isAuthenticated as isAuthenticatedService, removeToken, setToken } from "../services/authService";

type User = {
id: string,
name: string,
email: string,
password: string,
token: string,
}

type AuthContextData = {
  user: User;
  signIn: (email: string, password: string) => Promise<IMensageLoginType>;
  signOut: () => void;
  isAuthenticated: () => boolean;
  loading: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export type IMensageLoginType = {
  success: boolean;
  msg: string;
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(false);
  
   const signIn = async (email: string, password: string): Promise<IMensageLoginType> => {
      try{
        
        setLoading(true)
        const data = {
          email,
          password,
        } 
        const resLogin = await api.post('/api/auth/login', data);        
        
        setToken(resLogin.data?.token);

        
        return {
          msg: resLogin.data?.msg || 'Login realizado com sucesso!',
          success: true
        }

      }catch(error: any){
        return {
          msg: error?.response?.data?.msg || 'Não foi possível realizar o login.',
          success: false
        }
      } finally{
      
        setLoading(false);
      
      }
   }

   const signOut = () => {
     removeToken();
   }

   const isAuthenticated = () => {
    return isAuthenticatedService()
   }


  return (
    <AuthContext.Provider value={{user, signIn, signOut, isAuthenticated, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {
  AuthProvider,
  useAuth
}

