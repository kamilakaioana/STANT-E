const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");

module.exports = (server) => {
  const router = express.Router();

  server.use("/api", router);

  // BOOKS ROUTES
  const Book = require("../services/bookService");
  const User = require("../services/userService");
  const Auth = require("../services/authService");

  //BOOK ROUTES

  //Node Restfull - default routes
  Book.Livro.register(router, "/livros");
  //Custom routes
  router.get("/livros/usuario", isAuthenticated, Book.findByLoggedUser);

  router.get("/livros/favoritos", isAuthenticated, Book.favorite);

  router.get("/livros/lidos", isAuthenticated, Book.read);

  router.put(
    "/livros/update-favorite/:id",
    isAuthenticated,
    Book.toggleFavorite
  );

  // USER ROUTES

  // cria User
  router.post("/users", User.create);

  // busca 1 user
  router.get("/users/:id", isAuthenticated, User.getOne);

  //AUTH ROUTES

  //login user
  router.post("/auth/login", Auth.login);

  // pega info do user logado
  router.get("/auth/me", isAuthenticated, Auth.me);
};
