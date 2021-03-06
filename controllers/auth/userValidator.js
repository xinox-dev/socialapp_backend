const express = require("express")
const { body } = require("express-validator");

  const userValidator = [
    body("password")
      .exists().withMessage("Password is required")
      .isString().withMessage("Password should be string")
      .isLength({ min:5,max:100 }).withMessage("Password should be at min 5 char and max 100 char")
      .custom(value => !/\s/.test(value)).withMessage('No spaces are allowed in the password'),
    body("login")
      .exists().withMessage("Login is required")
      .isString().withMessage("Login should be string")
      .isLength({ min: 5, max:100 }).withMessage("Login should be at min 5 char and max 100 char")
      .custom(value => !/\s/.test(value)).withMessage('No spaces are allowed in the login'),
  ]
  module.exports = userValidator;