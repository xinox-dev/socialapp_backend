const pool = require("../../config/db_conect");


const unlikePost = (req, res) => {
    try {
        const idPost = req.body.id_post
        const idProfile = req.user.id_profile

        let SQL= `DELETE FROM like_post WHERE id_post = ${idPost} AND id_profile = ${idProfile}`
        pool.query(SQL, (err, response) => {
            if(err) res.sendStatus(501)
            else {
                res.sendStatus(200)
            }
        })
    } catch {
        res.sendStatus(500)
    } 
}


module.exports = unlikePost