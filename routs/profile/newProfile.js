const mysql = require('mysql');
const pool = require('../../config/db_conect');
const { validationResult } = require("express-validator");

const newProfile = async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            success: false,
            errors: errors.array(),
          })}

        try {
            const {firstName, lastName, dateOfBrith, country, city} = req.body
            const idUser = req.user.id_user
            
            let insertQuery = "INSERT INTO ?? (??, ??, ??, ??, ??, ??)VALUES (?, ?, ?, ?, ?, ?)"
            let nameSpaceQuery = ["profile", "first_name", "last_name", "brith_date", "city", "country", "id_user"]
            let valueQuery = [firstName, lastName, dateOfBrith, city, country, idUser]
            let SQL = mysql.format(insertQuery, nameSpaceQuery.concat(valueQuery));

            pool.query(SQL, (err, response) => {
                if(err) {
                    console.log(err)
                    res.status(501)
                }
                else {

                    res.status(200).json({
                        success: true,
                        profile:req.body  
                    })
                }
            })
        } catch(error) {
            console.log(error)
            res.status(500).send("Serwer Error")
        }
        

    }


module.exports = newProfile;