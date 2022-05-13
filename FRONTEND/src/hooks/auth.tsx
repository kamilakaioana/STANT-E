import React, {createContext, ReactNode, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {api} from '../services/api'
import { getToken, removeToken, setToken } from "../services/authService";

type User = {
id: string,
name: string,
email: string,
password: string,
token: string,
}

type AuthContextData = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)


function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate()

   const signIn = async (email: string, password: string) => {
      try{
        setLoading(true)
        const data = {
          email,
          password,
        } 
        const resLogin = await api.post('/api/auth/login', data);
          
        setToken(resLogin.data?.token);
        checkAuthentication();
        navigate("/")

      }catch(error){
        console.log(error)
      } finally{
        checkAuthentication();
        setLoading(false);
      }
   }

   const signOut = () => {
     removeToken();
     checkAuthentication()
   }

   const checkAuthentication = () => {
    const token = getToken();
    setIsAuthenticated(Boolean(token)) 
   }

  //  const isAuthenticated = (): boolean => {
  //    const token = getToken();
  //    console.log("senhor dos aneis e o ", token)
  //   return token ? true : false;
  //  }

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

