const express = require("express")
const { body } = require("express-validator");

const emailValidator = [
    body("email")
     .exists().withMessage("Email is required")
     .isString().withMessage("Emial should be string")
     .isEmail().withMessage("Provide valid email")
 ]
 module.exports = emailValidator;