const ModelUser = require("../models/users/user");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const Secret = process.env.JWT_SECRET;

const login = async (req, res) => {
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
    res.status(200).json({ msg: "Autenticação realizada com sucesso", token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Erro no servidor, tente novamente mais tarde!" });
  }
};

const me = async (req, res) => {
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
};
const Auth = {
  login,
  me,
};

module.exports = Auth;
