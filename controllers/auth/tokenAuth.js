const express = require('express')
const jwt = require('jsonwebtoken')
const {secret_key} = require('../../config/config')

module.exports = (req, res, next) =>{
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    // const token = req.cookies.JWT

    if(token === null) return(res.sendStatus(401))

    jwt.verify(token,secret_key, (err, user) => {
        if(err) {
            console.log(err)
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}