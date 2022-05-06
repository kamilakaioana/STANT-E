const errorHandler = require("../common/errorHandler");
const Livro = require("../models/livros/livro");
const isAuthenticated = require("../middlewares/isAuthenticated")

Livro.methods(["get", "post", "put", "delete"]);

Livro.updateOptions({new: true, runValidators: true})

Livro.before("get", isAuthenticated).before("post", isAuthenticated).before("put", isAuthenticated).before("delete", isAuthenticated);

Livro.after("post", errorHandler).after("put", errorHandler)


module.exports = Livro;