const express = require('express');
const {port} = require('./config/config');
const routes = require('./api/user/userAPI')
var cookieParser = require('cookie-parser')


const app = express();

app.use(cookieParser())
app.use(express.json());
app.use ("/api", routes);


require('./test/test')


app.listen(port, ()=> {console.log("serwer is runing... http//localhost:" + port)});

