import BookModels from "../models/books.model.js";

export default class BooksController {
  getBooks(req, res) {
    const books = BookModels.getAllBooks();
    res.render("home", { books: books });
  }
  getAddView(req, res) {
    res.render("addBook", { validationErrors: null });
  }
  postNewBook(req, res) {
    const { name, detail, price } = req.body;
    const img = "images/" + req.file.filename;
    BookModels.addBooks(name, detail, price, img);
    const books = BookModels.getAllBooks();
    res.render("home", { books: books });
  }
}
