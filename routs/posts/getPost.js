const pool = require("../../config/db_conect");


const getPost = (req, res) => {
    try {
        const idPost = req.params['id']

        let SQL= `SELECT text, id_profile FROM post WHERE id_post = ${idPost}`
        pool.query(SQL, (err, response) => {
            if(err) res.sendStatus(500)
            else {
                if(response.length === 0) res.sendStatus(404)
                else {
                    res.status(200).json({
                    id_post: idPost,
                    id_author: response[0].id_profile,
                    text: response[0].text        
                    })
                }   
            }
        })
    } catch {
        res.sendStatus(500)
    } 
}


module.exports = getPost