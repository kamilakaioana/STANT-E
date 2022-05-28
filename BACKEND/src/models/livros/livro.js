const restFul = require("node-restful");
const mongoose = restFul.mongoose;

const livroSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  favorite: {
    type: Boolean,
    default: false
  },
  read: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: ''
  },
  clientId: {
    type: String,
    default: ''
  },
});

module.exports = restFul.model("Book", livroSchema)