const bcrypt = require("bcrypt");
const { validationResult, body } = require("express-validator");
const mysql = require('mysql');
const pool = require('../config/db_conect');
const jwt = require('jsonwebtoken');
const {secret_key} = require('./../config/config')
const {refresh_secret_key} = require('./../config/config');
const refToken = require('./../database/refToken')


class userAuth {
    async login(req, res) {
        const login = req.body.login;
        const password = req.body.password;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            success: false,
            errors: errors.array(),
          })}

        const SQL = `SELECT login, email, pass,id_user FROM user WHERE login="${login}"`
        pool
            .query(SQL, (err, result) => {
                if(err)throw(err)
                if(result == 0) {
                return res.status(400).json({msg:"Email or password is incorrect"});
              } else {
                const email = result[0].email;
                const id_user = result[0].id_user;
                bcrypt
                    .compare(password, result[0].pass)
                    .then(async(valid) => {
                      if(!valid) {
                        return res.status(401).json({msg:"Email or password is incorrect"});
                      }
                      const token = jwt.sign({id_user}, secret_key,{expiresIn:60})
                      await refToken.delete(id_user)
                      const ref_token = jwt.sign({id_user}, refresh_secret_key,{expiresIn:600000})
                      await refToken.save(ref_token,id_user)
                      
                      res .cookie('JWT',token,{maxAge:86400000,httpOnly:true})
                          .cookie('ref_JWT',ref_token,{maxAge:86400000,httpOnly:true})
                  
                      res .status(200)
                          .json({
                            msg:"Zalogowano pomyślnie",
                            user:{id_user,login, email},
                          })
                    })
                    .catch((err) => {
                      res.status(500).json({msg:"Email or password is incorrect"});
                      console.log(err)
                    })
              }
            })    
          }
    
    async register(req, res ){
        const login = req.body.login;
        const email = req.body.email;
        const password = req.body.password;
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
              success: false,
              errors: errors.array(),
            })}
        const hashPasswd = await bcrypt.hash(password, 10);
        let insertQuery = 'INSERT INTO ?? (??,??,??,??) VALUES (?,?,?,?)';
        let SQL = mysql.format(insertQuery, ["user","login","email","pass","created_at",login,email,hashPasswd,new Date()]);
        pool.query(SQL, (err, result)=> {
            if(err)throw(err)
            const id = result.insertId;
            const user = {"id":id,"login":login,"email":email}
           
            res .status(200)
                .json({
                        success:true,
                        msg:"Operacja udana",
                        user:user
                  })
          })      
      }
    test (req, res) {
      const id = req.user.id_user
      const SQL = `SELECT * FROM user WHERE id_user="${id}"`
        pool
            .query(SQL, (err, result) => {
                if(err)throw(err.message)
                if(result == 0) {
                return res.status(400).json({msg:"Email or password is incorrect"});
              } else {
                res.json({user:result[0]});
              }
            })
    }

}

module.exports = new userAuth();