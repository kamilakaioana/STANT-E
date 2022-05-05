const errorHandler = require("../common/errorHandler");
const Livro = require("../models/livros/livro");
const isAuthenticated = require("../middlewares/isAuthenticated")

Livro.methods(["get", "post", "put", "delete"]);

Livro.updateOptions({new: true, runValidators: true})

Livro.before("get", isAuthenticated)
Livro.before("post", isAuthenticated)
Livro.before("put", isAuthenticated)
Livro.before("delete", isAuthenticated)

Livro.after("post", errorHandler).after("put", errorHandler)


module.exports = Livro;