const pool = require("../../config/db_conect");


const getLikePost = (req, res, next) => {
    try {
        const idPost = req.params['id']

        let SQL= `SELECT id_profile FROM like_post WHERE id_post = ${idPost}`
        pool.query(SQL, (err, response) => {
            if(err) res.sendStatus(500)
            else {
                req.PostLike = response.length
                next()
            }
        })
    } catch {
        res.sendStatus(500)
    } 
}


module.exports = getLikePost