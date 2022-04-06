const mysql = require('mysql');
const { connect } = require('../routs/api_login');
const pool = require('./connect');
const date = require('./time')

module.exports = {
   login: function (login, password) {

   },
   register: function(login, password) {
       let insertQuery = 'INSERT INTO ?? (??,??,??) VALUES (?,?, ?)';
       let SQL = mysql.format(insertQuery, ["user","email", "passwd", "created", login, password, date()]);
       pool.query(SQL, (err, response)=> {
           if(err) throw err;
           console.log(response.insertId);
       })
   }
}