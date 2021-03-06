import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import BookRegister from "../pages/bookRegister";
import Favorites from "../pages/favorites";
import Home from "../pages/home";
import Login from "../pages/login";
import Read from "../pages/read";
import UserRegister from "../pages/userRegister";
import LayoutBase from "../shared/layoutBase";

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated() ? (
        <Route path="/">
          <Route element={<LayoutBase />}>
            <Route index element={<Home />} />
            <Route path="favoritos" element={<Favorites />} />
            <Route path="lidos" element={<Read />} />
            <Route path="livro">
              <Route index element={<BookRegister />} />
              <Route path=":bookId" element={<BookRegister />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}

      {/* <Route path="*" element={<>Não encontrando</>} /> */}
    </Routes>
  );
}
