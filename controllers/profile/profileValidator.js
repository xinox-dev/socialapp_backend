const express = require("express")
const { body } = require("express-validator");


const profileValidator = [
    body("firstName")
        .isString().withMessage("Name should be string")
        .exists().withMessage("Name is required")
        .isLength({ min: 2, max:45 }).withMessage("Name should be at min 2 char and max 45 char")
        .custom(value => !/\s/.test(value)).withMessage('No spaces are allowed in the name'),

    body("lastName")
        .isString().withMessage("Name should be string")
        .exists().withMessage("Name is required")
        .isLength({ min: 2, max:45 }).withMessage("Name should be at min 2 char and max 45 char")
        .custom(value => !/\s/.test(value)).withMessage('No spaces are allowed in the name'),
    
    body("dateOfBrith")
    .isLength({min: 10, max: 10}).withMessage("Syntax error")
    .custom(value => {
        if(value.charAt(4) === '-' && value.charAt(7) === '-') return true
    }).withMessage('Syntax error')
    .custom(value => {
        value = value.split('-')
        if(value[0] > 1900 
            && value[0] < 2050 
            && value[1] > 0 
            && value[1] <= 12 
            && value[2] > 0
            && value[2] <= 31) return true
    }).withMessage('Syntax error'),

    body('country')
        .isString().withMessage("Country should be string")
        .isLength({ min: 2, max:45 }).withMessage("Country should be at min 2 char and max 45 char"),

    body('city')
        .isString().withMessage("City should be string")
        .isLength({ min: 2, max:45 }).withMessage("City should be at min 2 char and max 45 char")

]

module.exports = profileValidator