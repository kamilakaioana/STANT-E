const express = require("express");

module.exports = (server) => {

  const protectApi = express.Router();
  
  server.use("/api", protectApi);

  const Livro = require("../livros/livro");

  Livro.register(protectApi, "/livros")
}

