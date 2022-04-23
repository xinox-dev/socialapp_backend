const pool = require('../../../config/db_conect');
const { validationResult } = require("express-validator");


const editFirstName = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      })}


    try {
        const firstName = req.body.firstName 
        const id = req.user.id_user
        
        let SQL = `UPDATE profile SET first_name = "${firstName}" WHERE id_user = "${id}"`
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

module.exports = editFirstName
