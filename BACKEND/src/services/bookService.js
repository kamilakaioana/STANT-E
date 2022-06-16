const errorHandler = require("../common/errorHandler");
const Livro = require("../models/livros/livro");
const isAuthenticated = require("../middlewares/isAuthenticated");

Livro.methods(["get", "post", "put", "delete"]);

Livro.updateOptions({ new: true, runValidators: true });

Livro.before("get", isAuthenticated)
  .before("post", isAuthenticated)
  .before("put", isAuthenticated)
  .before("delete", isAuthenticated);

Livro.after("post", errorHandler).after("put", errorHandler);

const findByLoggedUser = async (req, res) => {
  const id = req.userId;

  const books = await Livro.find({ clientId: id })
    .collation({ locale: "pt" })
    .sort({ title: 1 });

  if (!books) {
    return res.status(404).json({
      msg: "Não foram encontrados livros registrados para esse usuario.",
    });
  }
  res.status(200).json({ books });
};

const favorite = async (req, res) => {
  const id = req.userId;

  const books = await Livro.find({ clientId: id })
    .find({
      favorite: true,
    })
    .collation({ locale: "pt" })
    .sort({ title: 1 });

  if (!books) {
    return res.status(404).json({
      msg: "Não foram encontrados livros registrados como favoritos.",
    });
  }
  res.status(200).json({ books });
};

const read = async (req, res) => {
  const id = req.userId;

  const books = await Livro.find({ clientId: id })
    .find({
      read: true,
    })
    .collation({ locale: "pt" })
    .sort({ title: 1 });

  if (!books) {
    return res
      .status(404)
      .json({ msg: "Não foram encontrados livros registrados como lidos." });
  }
  res.status(200).json({ books });
};

const toggleFavorite = async (req, res) => {
  const bookId = req.params.id;
  try {
    const bookById = await Livro.findById(bookId);
    if (!bookById) {
      return res.status(404).json({ msg: "Erro livro não encontrado." });
    }

    await Livro.updateOne(
      { _id: bookId }, // Filter
      { favorite: !bookById.favorite } // Update)
    );

    const updatedBook = await Livro.findById(bookId);

    res.status(200).json({ book: updatedBook });
  } catch (error) {
    console.log("error", error);
    return res.status(404).json({ msg: "Erro ao favoritar livro." });
  }
};

const Book = {
  Livro,
  findByLoggedUser,
  favorite,
  read,
  toggleFavorite,
};
module.exports = Book;
