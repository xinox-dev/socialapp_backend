const pool = require('../../config/db_conect');


const getProfile = (req, res) => {
    const id = req.params['id']
    let SQL = `SELECT * FROM profile WHERE id_user="${id}"`
    
    pool.query(SQL, (err, response) => { 
        if(err) console.log(err)
        else  if(response.length === 0) {
            res.status(404).send("Brak profilu")
        }
        else {
            res.status(200).json(response[0])
        }
    })
}

module.exports = getProfile