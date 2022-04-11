const express = require('express');
const router = express.Router();

const userValidator= require('../../controllers/userValidator')
const emailValidator= require('../../controllers/emailValidator')
const tokenAuth = require('./../../controllers/tokenAuth')
const {verifyEmail} = require('../../controllers/userVerify')
const {verifyLogin} = require('../../controllers/userVerify')


const userAuth = require('../../routs/userAuth');
const userToken = require('../../routs/userToken');


//login 
router.post('/login',userValidator, userAuth.login);
//reister
router.post('/register',[userValidator,emailValidator,verifyLogin,verifyEmail], userAuth.register);
//user data
router.get('/user',tokenAuth, userAuth.test)
//refresh token
router.post('/token/refresh', userToken.refresh)
//delete token with db
router.post('/token/logout', userToken.logout)

module.exports = router;