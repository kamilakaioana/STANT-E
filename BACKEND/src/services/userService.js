const ModelUser = require("../models/users/user");
const { hash } = require("bcryptjs");

const create = async (req, res) => {
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
    res.status(201).json({ msg: "Usuário criado com sucesso!", user: resUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Erro no servidor, tente novamente mais tarde!" });
  }
};

const getOne = async (req, res) => {
  const id = req.params.id;

  //check if user exixts
  const user = await ModelUser.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "usuario não encontrado" });
  }
  res.status(200).json({ user });
};

const User = {
  create,
  getOne,
};

module.exports = User;
