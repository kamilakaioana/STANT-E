const restFul = require("node-restful");
const mongoose = restFul.mongoose;

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String
  },
  autor: {
    type: String
  },
  descricao: {
    type: String
  },
  favorito: {
    type: Boolean
  },
  lido: {
    type: Boolean, default: false
  },
});

module.exports = restFul.model("Livro", livroSchema)