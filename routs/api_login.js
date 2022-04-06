const express = require('express');
const router = express.Router();

const login = require('../api/loginActions');

//login 
router.post('/login', login.login);
//reister
router.post('/register', login.register);

module.exports = router;