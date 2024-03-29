import BookModels from "../models/books.model.js";
import UserModel from "../models/user.model.js";

export default class UserController {
  getRegisterView(req, res) {
    res.render("register");
  }

  getLoginView(req, res) {
    res.render("login", { validationErrors: null });
  }

  createNewUser(req, res) {
    const { username, useremail, userpassword } = req.body;
    UserModel.createUser(username, useremail, userpassword);
    res.render("login", { validationErrors: null });
  }

  postLogin(req, res) {
    const { useremail, userpassword } = req.body;
    const user = UserModel.isValidUser(useremail, userpassword);
    if (!user) {
      return res.render("login", { validationErrors: "Invalid Credentials!" });
    }
    req.session.userEmail = useremail;
    const books = BookModels.getAllBooks();
    res.render("home", { books: books });
  }
}
