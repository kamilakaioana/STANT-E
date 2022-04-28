const restFul = require("node-restful");
const mongoose = restFul.mongoose;

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    default: null,
  },
  favorito: {
    type: Boolean,
    default: false
  },
  lido: {
    type: Boolean,
    default: false
  },
});

module.exports = restFul.model("Livro", livroSchema)