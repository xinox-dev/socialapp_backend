const pool = require('../config/db_conect');
const jwt = require('jsonwebtoken');
//const {secret_key} = require('./../config/config')
const {refresh_secret_key} = require('./../config/config');
const {secret_key} = require('./../config/config')
const refToken = require('./../database/refToken')


class userToken {
    refresh (req,res)  {
        // const ref_token = req.body.token
        // if(ref_token === null) return(res.sendStatus(401))
        const ref_token = req.cookies.ref_JWT

        let SQL = `SELECT token FROM token WHERE token="${ref_token}"`
        pool.query(SQL, (err, result)=> {
            if(err) {throw(err)}
            if(result==0) res.sendStatus(403) 
            else {
                jwt.verify(ref_token,refresh_secret_key, (err, user) => {
                if(err) return res.sendStatus(403)
                const id_user = user.id_user
                const token = jwt.sign({id_user}, secret_key,{expiresIn:60})
                res.cookie('JWT',token,{maxAge:86400000,httpOnly:true})
                res.json({token})
                
        }) 
            }  
        }) 
    }

    logout (req, res) {
        // const ref_token = req.body.token
        // if(ref_token === null) return(res.sendStatus(401))
        const ref_token = req.cookies.ref_JWT
        
        let SQL = `SELECT token FROM token WHERE token="${ref_token}"`
        pool.query(SQL, (err, result)=> {
            if(err) {throw(err)}
            if(result==0) res.sendStatus(403) 
            else {
                jwt.verify(ref_token,refresh_secret_key, (err, user) => {
                    if(err) return res.sendStatus(403)
                    const id_user = user.id_user
                    refToken.delete(id_user)
                    res.cookie('JWT','',{maxAge:86400000,httpOnly:true})
                    return res.sendStatus(200)
                })    
            }     
        }) 
    }
}
module.exports = new userToken()
