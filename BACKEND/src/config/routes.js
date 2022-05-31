const ModelUser = require("../models/users/user");
const ModelBook = require("../models/livros/livro");
const express = require("express");

const { sign } = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const isAuthenticated = require("../middlewares/isAuthenticated");

const Secret = process.env.JWT_SECRET;

module.exports = (server) => {
  const router = express.Router();

  server.use("/api", router);

  const Livro = require("../services/livroService");
  Livro.register(router, "/livros");

  router.get("/livros/favoritos", isAuthenticated, async (req, res) => {
    const id = req.userId;

    //check if user exixts
    const books = await ModelBook.find({ clientId: id })
      .find({
        favorite: true,
      })
      .collation({ locale: "pt" })
      .sort({ title: 1 });

    if (!books) {
      return res.status(404).json({ msg: "usuario não encontrado" });
    }
    res.status(200).json({ books });
  });

  router.get("/livros/lidos", isAuthenticated, async (req, res) => {
    const id = req.userId;

    //check if user exixts
    const books = await ModelBook.find({ clientId: id })
      .find({
        read: true,
      })
      .collation({ locale: "pt" })
      .sort({ title: 1 });

    if (!books) {
      return res.status(404).json({ msg: "usuario não encontrado" });
    }
    res.status(200).json({ books });
  });
  // router.use("/favoritos", (req, res, next) => {
  //   const filters = req.query;
  //   const filteredUsers = data.filter((user) => {
  //     return user.favorites === true;
  //     // let isValid = true;
  //     // for (key in filters) {
  //     //   console.log("ooo ooo", key, user[key], filters[key]);
  //     //   isValid = isValid && user[key] == filters[key];
  //     // }
  //     // return isValid;
  //   });
  //   res.send(filteredUsers);
  // });

  // router.use("/livros/favoritos", (req, res, next) => {
  //   const filters = req.query;
  //   const filteredUsers = data.filter((user) => {
  //     let isValid = true;
  //     for (key in filters) {
  //       console.log("ooo ooo", key, user[key], filters[key]);
  //       isValid = isValid && user[key] == filters[key];
  //     }
  //     return isValid;
  //   });
  //   res.send(filteredUsers);
  // });

  // router.post('/livros', async (req, res) => {
  //   const { title, author, favorite, read, description, image } = req.body;

  //   //validation
  //   if (!title) {
  //     return res.status(422).json({ msg: "O titulo é obrigatório!" });
  //   }
  //   if (!author) {
  //     return res.status(422).json({ msg: "O Autor é obrigatório!" });
  //   }
  //   imgB64 = '';
  //   if (image) {
  //     imgB64 = Buffer.from(image).toString('base64');
  //     console.log(imgB64)
  //   }

  //   try {
  //      //CREATE book
  //     const book = new ModelBook({
  //       title,
  //       author,
  //       favorite,
  //       read,
  //       description,
  //       image: imgB64
  //     })

  //     const resBook = await book.save();

  //     res.status(201).json({ msg: "Livro criado com sucesso!", data: resBook })
  //   } catch (error) {
  //     console.log(error)
  //     res.status(500).json({ msg: "Erro no servidor, tente novamente mais tarde!" })
  //   }
  // });
  // Usuários
  // busca 1 user
  router.get("/users/:id", isAuthenticated, async (req, res) => {
    const id = req.params.id;

    //check if user exixts
    const user = await ModelUser.findById(id, "-password");

    if (!user) {
      return res.status(404).json({ msg: "usuario não encontrado" });
    }
    res.status(200).json({ user });
  });

  // cria User
  router.post("/users", async (req, res) => {
    //userController.store

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

    try {
      //check if user exists
      const userExists = await ModelUser.findOne({ email: email });
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
      });

      const resUser = await user.save();
      resUser.password = null;
      res
        .status(201)
        .json({ msg: "Usuário criado com sucesso!", user: resUser });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Erro no servidor, tente novamente mais tarde!" });
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

    try {
      //check if user exists
      const user = await ModelUser.findOne({ email: email });
      if (!user) {
        return res.status(422).json({ msg: "Email ou senha incorreto!" });
      }

      // check if password matchMedia
      const checkPassword = await compare(password, user.password);
      if (!checkPassword) {
        return res.status(422).json({ msg: "Email ou senha incorreto!" });
      }

      // const secret
      const token = sign(
        {
          email: user.email,
        },
        Secret,
        {
          subject: user.id,
          expiresIn: "1d",
        }
      );
      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso", token });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Erro no servidor, tente novamente mais tarde!" });
    }
  });

  // pega info do user logado
  router.get("/auth/me", isAuthenticated, async (req, res) => {
    // router.get("/api/auth/me", isAuthenticated, async (req, res) => {
    const id = req.userId;

    try {
      //check if user exixts
      const user = await ModelUser.findById(id, "-password");

      if (!user) {
        return res.status(404).json({ msg: "usuario não encontrado" });
      }
      res.status(200).json({ user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Erro no servidor, tente novamente mais tarde!" });
    }
  });
};
