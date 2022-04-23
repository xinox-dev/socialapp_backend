const pool = require("../../config/db_conect");


const doubleLikePost = (req, res, next) => {
    const id_post = req.body.id_post
    const id_profile = req.user.id_profile

    const SQL = `SELECT id_post, id_profile FROM like_post WHERE id_post = ${id_post} AND id_profile = ${id_profile}`
    pool.query(SQL, (err, response) => {
        if(response.length === 0) {
            next()  
        }
        else res.sendStatus(403)
    })
}

module.exports = doubleLikePost