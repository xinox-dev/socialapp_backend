const pool = require("../../config/db_conect");


const getLikePost = (req, res) => {
    try {
        const idPost = req.params['id']

        let SQL= `SELECT id_profile FROM like_post WHERE id_post = ${idPost}`
        pool.query(SQL, (err, response) => {
            if(err) res.sendStatus(500)
            else {
                res.status(200).json({
                    id_post: idPost,
                    like: response.length
                })
            }
        })
    } catch {
        res.sendStatus(500)
    } 
}


module.exports = getLikePost