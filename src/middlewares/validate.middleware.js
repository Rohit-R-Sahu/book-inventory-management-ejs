import { body, validationResult } from "express-validator";

export async function validateCreation(req, res, next) {
  const rules = [
    body("name").notEmpty().withMessage("Name is required."),
    body("price").isFloat({ gt: 0 }).withMessage("Price can't be negative."),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));

  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.render("addBook", {
      validationErrors: validationErrors.array()[0].msg,
    });
  }
  next();
}
