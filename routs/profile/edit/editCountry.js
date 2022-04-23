const pool = require('../../../config/db_conect');
const { validationResult } = require("express-validator");


const editCountry = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      })}


    try {
        const country = req.body.country 
        const id = req.user.id_user
        
        let SQL = `UPDATE profile SET country = "${country}" WHERE id_user = "${id}"`
        pool.query(SQL, (err, response) => {
            if(err) res.status(500) 
            else {
                res.status(200).json({
                    success: true
                })
            }
        })
    } catch {
        res.status(500)
    }
}

module.exports = editCountry
