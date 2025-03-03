const express = require('express');
const db = require('./configs/database');
const port = 8095;
const multer = require('multer');
const movieModel = require('./models/movieSchema');
const bodyParse = require('body-parser');
const path = require('path');
const adminModel = require('./models/adminSchema');
const cookieParser = require('cookie-parser');
const { clientRedirect } = require('./middlewares/clientRedirect');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParse.urlencoded({extended : true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());

app.use('/',clientRedirect);
app.use('/',require('./routers/clientRouter')); 
app.use('/',require('./routers/adminRouter'));
app.use('/',require('./routers/movieRouter'));

app.listen(port ,()=>{
    db();
    console.log("Server Start on \nhttp://localhost:"+port);
})