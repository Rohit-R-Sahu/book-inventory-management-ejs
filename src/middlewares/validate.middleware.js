import { body, validationResult } from "express-validator";

export const validateAddBook = async (req, res, next) => {
  const rules = [
    body("name").trim().notEmpty().withMessage("Enter Valid Name"),
    body("detail").notEmpty().withMessage("Detail is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Price cannot be negative"),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));

  const validationError = validationResult();
  if (!validationError.isEmpty()) {
    return res.render("addBook", {
      validationError: validationError.array()[0].msg,
    });
  }
  next();
};
