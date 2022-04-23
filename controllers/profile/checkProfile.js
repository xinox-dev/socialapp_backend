const pool = require("../../config/db_conect") 

const checkProfile = (req, res, next) => {
    const SQL = `SELECT id_user, id_profile FROM profile WHERE id_user = "${req.user.id_user}"`
    pool.query(SQL, (err, resopnse) => {
        if(resopnse.length === 0) {
            res.status(403).json({
                success: false,
                errors:[{
                    param:"checkProfile",
                    msg:"The user not have profle in system"     
                }]
                
            })
        }
        else{
            req.user.id_profile = resopnse[0].id_profile
           next() 
        } 
    })


}

module.exports = checkProfile