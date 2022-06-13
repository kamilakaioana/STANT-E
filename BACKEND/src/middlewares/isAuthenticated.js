const jwt = require("jsonwebtoken");
const ModelUser = require("../models/users/user");

const Secret = process.env.JWT_SECRET;

const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const { sub } = jwt.verify(token, Secret);
    req.userId = sub;
    const user = await ModelUser.findById(req.userId);
    if (user) {
      next();
    } else {
      // se não haver usuario exibir essa mensagem
      res.status(401).json({ msg: "Token inválido" });
    }
  } catch (error) {
    res.status(401).json({ msg: "Token inválido" });
  }
};

module.exports = isAuthenticated;
