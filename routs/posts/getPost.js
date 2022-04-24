const pool = require("../../config/db_conect");


const getPost = (req, res, next) => {
    try {
        const idPost = req.params['id']

        let SQL= `SELECT text, id_profile, created_at FROM post WHERE id_post = ${idPost}`
        pool.query(SQL, (err, response) => {
            if(err) res.sendStatus(500)
            else {
                if(response.length === 0) res.sendStatus(404)
                else {
                    req.post = {
                        id_post: idPost,
                        id_author: response[0].id_profile,
                        text: response[0].text,  
                        like: req.PostLike,
                        date: response[0].created_at
                    }
                    next()
                }   
            }
        })
    } catch {
        res.sendStatus(500)
    } 
}


module.exports = getPost