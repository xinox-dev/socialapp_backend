const { reject } = require('bcrypt/promises');
const mysql = require('mysql');
const pool = require('../config/db_conect');


class refToken {
    
    save (ref_token, id_user){ 
        let insertQuery = 'INSERT INTO ?? (??, ??) VALUES (?,?)';
        let SQL = mysql.format(insertQuery, ["token","id_user","token",id_user,ref_token]);
        pool.query(SQL, (err, result)=> {
            if(err) {  
            throw(err)
            }
        }) 
    }

    delete (id_user){ 
        let SQL = `DELETE FROM token WHERE id_user=${id_user};`;
        pool.query(SQL, (err, result)=> {
            if(err) {  
            throw(err)
            }
        })
    }
       
    
}

module.exports = new refToken