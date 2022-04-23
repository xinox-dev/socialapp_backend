const express = require('express');
const router = express.Router()


const tokenAuth = require('../../controllers/auth/tokenAuth');
const doubleLikePost = require('../../controllers/post/doubleLikePost');
const checkLikePost = require('../../controllers/post/checkLikePost');
const checkProfile = require('../../controllers/profile/checkProfile');
const likePost = require('../../routs/posts/likePost');
const unlikePost = require('../../routs/posts/unlikePost');
const getLikePost = require('../../routs/posts/getLikePost');

//get likes
router.get('/like/post/:id', getLikePost)
//like
router.post('/like/post',[tokenAuth, checkProfile, doubleLikePost], likePost)
//unlinke
router.delete('/like/post',[tokenAuth, checkProfile, checkLikePost], unlikePost)


module.exports = router