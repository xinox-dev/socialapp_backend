const pool = require("../../config/db_conect");


const getCountPost = (req, res) => {
    try {

        let SQL= `SELECT id_post FROM post`
        pool.query(SQL, (err, response) => {
            if(err) {
                res.sendStatus(500)
            }
            else {
                if(response.length === 0) res.sendStatus(404)
                else {
                    res.status(200).json({
                    count: response.length
                    })
                }   
            }
        })
    } catch {
        res.sendStatus(500)
    } 
}


module.exports = getCountPost