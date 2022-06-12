require("dotenv").config();
const port = process.env.PORT || 3004;
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const server = express();

// const allowlist = ["http://localhost:3000"];
const allowlist = ["*"];

const corsOptions = {
  origin: allowlist,
  optionsSuccessStatus: 200,
};

server.use(bodyParser.json({ limit: "3MB" }));
server.use(bodyParser.urlencoded({ extended: true, limit: "3MB" }));

server.use(cors(corsOptions));

//rota de teste
server.get("/", async (req, res) => {
  return res.status(200).send("Hello Word");
});
//

require("./config/routes")(server);

server.listen(port, () => {
  console.log(`Backend está rodando na porta ${port}`);
});

module.exports = server;
