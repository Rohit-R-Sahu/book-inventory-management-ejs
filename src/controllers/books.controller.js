import BookModels from "../models/books.model.js";

export default class BooksController {
  getBooks(req, res) {
    const books = BookModels.getAllBooks();
    res.render("home", { books: books });
  }
  getAddView(req, res) {
    res.render("addBook");
  }
}
