const jwt = require("jsonwebtoken");

const Secret = process.env.JWT_SECRET;

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]
  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" })
  }
  
  try {
    const { sub } = jwt.verify(token, Secret)
    req.userId = sub;
    
    next()
  } catch (error) {
    res.status(401).json({ msg: "Token inválido" })
  }
}

module.exports = isAuthenticated;