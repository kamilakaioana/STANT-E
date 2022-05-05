const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]
  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" })
  }
  
  try {
    // const secret = process.env.secret
    const { sub } = jwt.verify(token, "teste")
    req.userId = sub;

    next()
  } catch (error) {
    res.status(400).json({ msg: "Token inválido" })
  }
}

module.exports = isAuthenticated;