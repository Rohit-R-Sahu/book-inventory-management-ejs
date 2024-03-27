export default class BookModels {
  constructor(_id, _name, _detail, _price, _img) {
    (this.id = _id),
      (this.name = _name),
      (this.detail = _detail),
      (this.price = _price),
      (this.img = _img);
  }
  static getAllBooks() {
    return books;
  }
}

const books = [
  new BookModels(
    1,
    "Atomic habits",
    "Atomic Habits by James Clear is a self-help book.",
    250,
    "https://i0.wp.com/www.samuelthomasdavies.com/wp-content/uploads/2021/01/Atomic-Habits-Summary.jpeg?fit=229%2C346&ssl=1"
  ),
  new BookModels(
    2,
    "The monk who sold his ferrari",
    "The Monk Who Sold His Ferrari (1997) offers a remedy to the problems of modern life. ",
    200,
    "https://miro.medium.com/v2/resize:fit:324/0*S-yLd-55p9KdDGMS.jpg"
  ),
];
