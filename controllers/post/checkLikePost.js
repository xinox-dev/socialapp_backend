const pool = require("../../config/db_conect");


const checkLikePost = (req, res, next) => {
    const id_post = req.body.id_post
    const id_profile = req.user.id_profile

    const SQL = `SELECT id_post, id_profile FROM like_post WHERE id_post = ${id_post} AND id_profile = ${id_profile}`
    pool.query(SQL, (err, resopnse) => {
        if(resopnse.length === 0)  res.sendStatus(403)
        else next()
    })
}

module.exports = checkLikePost