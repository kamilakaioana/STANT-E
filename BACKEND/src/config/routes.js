const express = require("express");

module.exports = (server) => {

  const protectApi = express.Router();
  
  server.use("/api", protectApi);

  const Livro = require("../services/livroService");

  Livro.register(protectApi, "/livros")
}

