const pool = require("../../config/db_conect");


const likePost = (req, res) => {
    try {
        const idPost = req.body.id_post
        const idProfile = req.user.id_profile

        let SQL= `INSERT INTO like_post (id_post, id_profile) VALUES (${idPost}, ${idProfile})`
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


module.exports = likePost