const mysql = require('mysql');
const pool = require("../../config/db_conect");
const { validationResult } = require("express-validator");


const newPost = (req, res) => {
    
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({
            success: false,
            errors: errors.array(),
          })}

    
    try {
        const text = req.body.text 
        const idProfile = req.user.id_profile;

        let insertQuery = "INSERT INTO ?? (??, ??) VALUES (?, ?)"
        let nameSpaceQuery = ["post", "text", "id_profile"]
        let valueQuery = [text, idProfile]
        let SQL = mysql.format(insertQuery, nameSpaceQuery.concat(valueQuery));

        pool.query(SQL, (err, response) => {
            if(err) {
                res.status(501)
            }
            else(
                res.status(200).json({
                    success: true,
                    text: text,
                    id_post:response.insertId
                })
            )
        })


    } catch {
        res.status(500)
    }
}

module.exports = newPost