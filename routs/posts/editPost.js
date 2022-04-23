const pool = require("../../config/db_conect");


const editPost = (req, res) => {

    try {const text = req.body.text
        const idPost = req.user.id_post 

        let SQL = `UPDATE post SET text = "${text}" WHERE id_post = ${idPost}`
        pool.query(SQL, (err, response) => {
            if(err) console.log(err)
            else {
                res.status(200).json({
                    success: true,
                    text: text,
                    id_post: idPost

                })
            }
    })
    } catch {
        res.status(500).json({
            errors:{
                param:"editPost",
                msg:""
            } 
        })
    }
}

module.exports = editPost