const express = require('express');
const router = express.Router();

const userValidator= require('../../controllers/auth/userValidator')
const emailValidator= require('../../controllers/auth/emailValidator')
const tokenAuth = require('../../controllers/auth/tokenAuth')
const {verifyEmail} = require('../../controllers/auth/userVerify')
const {verifyLogin} = require('../../controllers/auth/userVerify')


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