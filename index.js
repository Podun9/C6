const express = require('express'); //import module express
const route = require('./route'); //import route

//import middleware error dan notfound
const errorMiddleware = require('./middlewares/error');
const notFoundMiddleware = require('./middlewares/notfound');

const app = express(); //inisiasi express

const users = []; //array untuk user

// import model
const {user_game} = require('./models');

const port = 3000; // konfigurasi port

//ejs sebagai view enginenya, download dulu npm install ejs
app.set('view engine', 'ejs');

//middleware static, serving staatic files
app.use(express.static('public'));

//middeware pembaca body
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//jalankan route di aplikasi
app.use(route);

//terapkan middleware error dan not found di akhirrrr
app.use(errorMiddleware.error);
app.use(notFoundMiddleware.notFound);

//jalankan server request
app.listen(port, () => console.log(`Server running on port ${port}`));