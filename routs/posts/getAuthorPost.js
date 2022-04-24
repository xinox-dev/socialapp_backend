const pool = require('../../config/db_conect');


const getAuthorPost = (req, res) => {
    console.log(req.post)
    const id = req.post.id_author
    let SQL = `SELECT first_name, last_name FROM profile WHERE id_profile="${id}"`
    
    pool.query(SQL, (err, response) => { 
        if(err) console.log(err)
        else  if(response.length === 0) {
            res.status(404).send("Brak profilu")
        }
        else {
            res.status(200).json({
                id_post: req.post.id_post,
                text: req.post.text,
                like: req.post.like,
                author: response[0],
                id_author: req.post.id_author,
                date: req.post.date,
            })
        }
    })
}

module.exports = getAuthorPost