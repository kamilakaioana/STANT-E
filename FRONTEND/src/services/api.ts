import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { getToken, removeToken } from "./authService";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

const customIntercept = (navigate: NavigateFunction) => {
  api.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      if (
        error.response?.status === 401 &&
        error.response.data?.msg === "Token inválido"
      ) {
        removeToken();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );
};

export { api, customIntercept };
