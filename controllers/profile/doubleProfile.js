const pool = require("../../config/db_conect") 

const doubleProfile = (req, res, next) => {
    const SQL = `SELECT id_user FROM profile WHERE id_user = "${req.user.id_user}"`
    pool.query(SQL, (err, resopnse) => {
        if(resopnse.length === 0) next()
        else {
            res.status(403).json({
                success: false,
                errors:[{
                    param:"doubleProfile",
                    msg:"The user already has a profile in the system"     
                }]
                
            })
        }
    })


}

module.exports = doubleProfile