const pool = require('../../config/db_conect');


const deleteProfile = (req, res) => {
    try {
        const id = req.user.id_user
        
        let SQL = `DELETE FROM profile WHERE id_user = "${id}"`
        pool.query(SQL, (err, response) => {
            if(err) res.status(500) 
            else {
                res.status(200).json({
                    success: true
                })
            }
        })
    } catch {
        res.status(500)
    }
}

module.exports = deleteProfile
