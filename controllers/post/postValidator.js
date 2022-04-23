const { body } = require("express-validator");


const postValidator = [
    body("text")
        .isString().withMessage("Text in post should be string")
        .exists().withMessage("Text in post is required")
        .isLength({max:500 }).withMessage("Text in should be at max 500 char")
]

module.exports = postValidator