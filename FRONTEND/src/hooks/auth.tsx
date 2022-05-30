import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  isAuthenticated as isAuthenticatedService,
  removeToken,
  setToken,
} from "../services/authService";

type User = {
  _id: string;
  name: string;
  email: string;
};

type AuthContextData = {
  user: User;
  signIn: (email: string, password: string) => Promise<IMensageLoginType>;
  signOut: () => void;
  isAuthenticated: () => boolean;
  loading: boolean;
  loadUser: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export type IMensageLoginType = {
  success: boolean;
  msg: string;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const signIn = async (
    email: string,
    password: string
  ): Promise<IMensageLoginType> => {
    try {
      setLoading(true);
      const data = {
        email,
        password,
      };
      const resLogin = await api.post("/api/auth/login", data);

      setToken(resLogin.data?.token);
      return {
        msg: resLogin.data?.msg || "Login realizado com sucesso!",
        success: true,
      };
    } catch (error: any) {
      return {
        msg: error?.response?.data?.msg || "Não foi possível realizar o login.",
        success: false,
      };
    } finally {
      setLoading(false);
    }
  };

  const loadUser = useCallback(async () => {
    try {
      const res = await api.get("/api/auth/me");
      setUser(res.data?.user);
    } catch (error) {}
  }, []);

  const signOut = () => {
    removeToken();
    navigate("/login");
  };

  const isAuthenticated = useCallback(() => {
    return isAuthenticatedService();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isAuthenticated, loading, loadUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
