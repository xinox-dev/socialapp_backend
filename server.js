const express = require('express');
const {port} = require('./config/config');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(cookieParser())
app.use(express.json());

const userAPI = require('./api/user/userAPI')
const profileAPI = require('./api/user/profileAPI')
const postAPI = require('./api/user/postAPI')
const likePostAPI = require('./api/user/likePostAPI')
app.use ("/api", userAPI);
app.use ("/api", profileAPI);
app.use ("/api", postAPI);
app.use ("/api", likePostAPI);




require('./test/test')


app.listen(port, ()=> {console.log("serwer is runing... http//localhost:" + port)});

