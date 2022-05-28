require('dotenv').config()
const port = process.env.PORT || 3004; 
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const server = express();

const allowlist = ['http://localhost:3000']

const corsOptions = {
  origin: allowlist,
  optionsSuccessStatus: 200
}

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(cors(corsOptions))


require("./config/routes")(server);

server.listen(port, () => {
  console.log(`Backend está rodando na porta ${port}`);
});


module.exports = server;