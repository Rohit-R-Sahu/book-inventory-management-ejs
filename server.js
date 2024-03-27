import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import dotenv from "dotenv";
import BooksController from "./src/controllers/books.controller.js";
import { validateAddBook } from "./src/middlewares/validate.middleware.js"; 


dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const bookController = new BooksController();

app.use(express.static(path.join(path.resolve(), "src", "public")));

// Setting up View ejs
app.set("view engine", "ejs");
const viewPath = path.join(path.resolve(), "src", "views");
app.set("views", viewPath);
app.use(expressEjsLayouts);

// Routes
app.get("/", bookController.getBooks);
app.get("/add-book", bookController.getAddView);



app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port} `);
});
