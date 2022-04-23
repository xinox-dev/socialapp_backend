const pool = require("../../config/db_conect") 

const checkPost = (req, res, next) => {
    const id_post = req.body.id_post

    const SQL = `SELECT id_post, id_profile FROM post WHERE id_post = ${id_post}`
    pool.query(SQL, (err, resopnse) => {
        if(resopnse.length === 0) {
            res.status(403).json({
                success: false,
                errors:[{
                    param:"checkPost",
                    msg:"We don't have post in system"     
                }]
                
            })
        } else {
            const id_profile = req.user.id_profile;
            const id_profie_db = resopnse[0].id_profile
            if(id_profie_db===id_profile){
                req.user.id_post = resopnse[0].id_post
               next() 
            } else {
                res.status(403).json({
                    success: false,
                    errors:[{
                        param:"checkPost",
                        msg:"This in not you post"     
                    }]
                })
            }
        } 
    })


}

module.exports = checkPost