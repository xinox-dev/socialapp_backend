const express = require('express');
const router = express.Router()

//middleways
const doubleProfile = require('../../controllers/profile/doubleProfile')
const checkProfile = require('../../controllers/profile/checkProfile');
const profileValidator = require('../../controllers/profile/profileValidator')
const tokenAuth = require('../../controllers/auth/tokenAuth')
//API
const newProfile = require('../../routs/profile/newProfile');
const getProfile = require('../../routs/profile/getProfile');
const editFirstName = require('../../routs/profile/edit/editFirstName');
const editLastName = require('../../routs/profile/edit/editLastName');
const editCountry = require('../../routs/profile/edit/editCountry');
const editCity = require('../../routs/profile/edit/editCity');
const deleteProfile = require('../../routs/profile/deleteProfile');

//pobiernanie porilu za pomoacą ID konta
    router.get('/profile/:id', getProfile);
//tworzenie profilu
    router.post('/profile/new', [ tokenAuth, doubleProfile, profileValidator], newProfile);
//edycja profilu
    router.put('/profile/edit/firstname',[tokenAuth, checkProfile, profileValidator[0]], editFirstName);
    router.put('/profile/edit/lastname',[tokenAuth, checkProfile, profileValidator[1]], editLastName);
    router.put('/profile/edit/country',[tokenAuth, checkProfile, profileValidator[3]], editCountry);
    router.put('/profile/edit/city',[tokenAuth, checkProfile, profileValidator[4]], editCity);
//kasowanie profilu 
    router.delete('/profie/delete',[tokenAuth, checkProfile], deleteProfile );

module.exports = router