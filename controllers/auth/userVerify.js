const pool = require("../../config/db_conect")
const bcrypt = require("bcrypt");

class userVerify  {
    verifyEmail(req, res, next){
        const SQL = `SELECT email FROM user WHERE email="${req.body.email}"`
        pool.query(SQL, (err, resopnse)=>{
            if(resopnse.length === 0) next()
            else {
                res.status(403).json({
                    success: false,
                    errors:[{
                        param:"email",
                        msg:"Email już jest zajęty"     
                    }]
                    
                })
            }
        })
    };
    verifyLogin(req, res, next){
        const SQL = `SELECT login FROM user WHERE login="${req.body.login}"`
        pool.query(SQL, (err, resopnse)=>{
            if(resopnse.length === 0) next()
            else {
                res.status(403).json({
                    success: false,
                    errors:[{
                        param:"login",
                        msg:"Login już jest zajęty"    
                    }]
                    
                })
            }
        })
    };

    
    verifyPasswd(req, res, next){
        const SQL = `SELECT email, passwd FROM user WHERE email="${req.body.email}"`
        pool.query(SQL, (err, resopnse)=>{
            if(err) {
                res.status(500).send("Błąd przy logowaniu");
            }
            const result = bcrypt.compareSync(req.body.password, resopnse[0].passwd);
            if(result) next()
            else res.status(403).send("Email bądz hasło nieprawidłowe")
        })
    };

    
    
}
   

  

module.exports = new userVerify()