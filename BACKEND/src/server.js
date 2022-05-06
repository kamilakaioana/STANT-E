require('dotenv').config()
const port = process.env.PORT || 3004; 
const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


require("./config/routes")(server);

server.listen(port, () => {
  console.log(`Backend está rodando na porta ${port}`);
});


module.exports = server;