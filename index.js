const express = require('express');
const {port} = require('./config');
const routes = require('./routs/api_login')
const date = require('./database/time')
const query = require('./database/query')

const app = express();

app.use ("/api", routes);

console.log(date());

setTimeout(() => {
   query.register("adam@gmail.pl","x3231xr12")
},1000);

app.listen(port, ()=> {console.log("serwer is runing... http//localhost:" + port)});
