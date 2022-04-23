const pool = require("../../config/db_conect");


const getAllPost = (req, res) => {
    try {

        let SQL= `SELECT id_post, id_profile, text, created_at FROM post`
        pool.query(SQL, (err, response) => {
            if(err) res.sendStatus(500)
            else {
                if(response.length === 0) res.sendStatus(404)
                else {
                    res.status(200).json({
                    posts: response 
                    })
                }   
            }
        })
    } catch {
        res.sendStatus(500)
    } 
}


module.exports = getAllPost