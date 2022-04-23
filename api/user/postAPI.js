const express = require('express');
const router = express.Router()
//middleways
const tokenAuth = require('../../controllers/auth/tokenAuth');
const postValidator = require('../../controllers/post/postValidator');
const checkProfile = require('../../controllers/profile/checkProfile');
const checkPost = require('../../controllers/post/checkPost');
//API
const getPost = require('../../routs/posts/getPost');
const editPost = require('../../routs/posts/editPost');
const newPost = require('../../routs/posts/newPost');
const getAllPost = require('../../routs/posts/getAllPost');

//pobieranie posta za pomacą id_post
router.get('/post/:id', getPost)
//pobiranie wszystkich postow
router.get('/post', getAllPost)
//tworzenie posta
router.post('/post', [postValidator, tokenAuth, checkProfile], newPost)
//edycja posta
router.put('/post',[postValidator, tokenAuth, checkProfile, checkPost], editPost)
//usuniecie posta

module.exports = router