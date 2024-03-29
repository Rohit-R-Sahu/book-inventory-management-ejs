import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import dotenv from "dotenv";
import BooksController from "./src/controllers/books.controller.js";
import { validateCreation } from "./src/middlewares/validate.middleware.js";
import { uploadImg } from "./src/middlewares/upload.middleware.js";
import { auth } from "./src/middlewares/auth.middleware.js";
import UserController from "./src/controllers/user.controller.js";
import session from "express-session";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const bookController = new BooksController();
const userController = new UserController();

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

// Serving static css files
app.use(express.static(path.join(path.resolve(), "src", "public")));
app.use(express.urlencoded({ extended: true }));

// Setting up View ejs
app.set("view engine", "ejs");
const viewPath = path.join(path.resolve(), "src", "views");
app.set("views", viewPath);
app.use(expressEjsLayouts);

// Routes
app.get("/",auth, bookController.getBooks);
app.get("/add-book",auth, bookController.getAddView);
app.post(
  "/", auth,
  uploadImg.single("img"),
  validateCreation,
  bookController.postNewBook
);
app.get("/register", userController.getRegisterView);
app.post("/register", userController.createNewUser);
app.get("/login", userController.getLoginView);
app.post("/login", userController.postLogin);
app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port} `);
});
