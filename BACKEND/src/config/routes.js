const ModelUser = require("../models/users/user");
const express = require("express");

const { sign } = require("jsonwebtoken")
const { hash, compare } = require("bcryptjs")
const isAuthenticated = require("../middlewares/isAuthenticated")


module.exports = (server) => {

  const router = express.Router();

  server.use("/api", router);

  const Livro = require("../services/livroService");
  Livro.register(router, "/livros");

  // Usuários
  // busca 1 user
  router.get("/users/:id", isAuthenticated, async (req, res) => {
    const id = req.params.id;

    //check if user exixts
    const user = await ModelUser.findById(id, '-password')

    if (!user) {
      return res.status(404).json({ msg: "usuario não encontrado" })
    }
    res.status(200).json({ user })
  })

  // cria User
  router.post('/users', async (req, res) => {

    const { name, email, password } = req.body;

    //validation
    if (!name) {
      return res.status(422).json({ msg: "O nome é obrigatório!" });
    }
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
    if (!password) {
      return res.status(422).json({ msg: "O password é obrigatório!" });
    }

    //check if user exists
    const userExists = await ModelUser.findOne({ email: email })
    if (userExists) {
      return res.status(422).json({ msg: "Por favor utilize outro e-mail!" });
    }
    //creat password
    const passwordHash = await hash(password, 8);
    //CREATE USER
    const user = new ModelUser({
      name,
      email,
      password: passwordHash,
    })
    try {
      const resUser = await user.save();
      resUser.password = null;
      res.status(201).json({ msg: "Usuário criado com sucesso!", user: resUser })
    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor, tente novamente mais tarde!" })
    }
  });


  //auth
  //login user
  router.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
    if (!password) {
      return res.status(422).json({ msg: "O password é obrigatório!" });
    }


    //check if user exists
    const user = await ModelUser.findOne({ email: email })
    if (!user) {
      return res.status(422).json({ msg: "Email ou Senha incorreto!" });
    }

    // check if password matchMedia
    const checkPassword = await compare(password, user.password)
    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha invalida!" });
    }

    try {
      // const secret 
      const token = sign({
        email: user.email,

      }, "teste", {
        subject: user.id,
        expiresIn: "1d"
      });
      res.status(200).json({ msg: "Autenticação realizada com sucesso", token })

    } catch (error) {
      console.log(error)
      res.status(500).json({ msg: "Erro no servidor, tente novamente mais tarde!" })
    }

  })

  // pega info do user logado
  router.get("/auth/me", isAuthenticated, async (req, res) => {
    // router.get("/api/auth/me", isAuthenticated, async (req, res) => {
    const id = req.userId;

    //check if user exixts
    const user = await ModelUser.findById(id, '-password')

    if (!user) {
      return res.status(404).json({ msg: "usuario não encontrado" })
    }
    res.status(200).json({ user })
  })

}