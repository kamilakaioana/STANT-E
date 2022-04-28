const errorHandler = require("../common/errorHandler");
const Livro = require("../livros/livro");

Livro.methods(["get", "post", "put", "delete"]);

Livro.updateOptions({new: true, runValidators: true})

Livro.after("post", errorHandler).after("put", errorHandler)


module.exports = Livro;