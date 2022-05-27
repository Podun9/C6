//import express router
const express = require('express'); 
const res = require('express/lib/response');
const router = express.Router();

//import controllers
const rootController = require('./controllers/root');

// rute api
//halaman home
router.get('/', rootController.home);

//halaman game
router.get('/game', rootController.game);

//halaman login 
router.get('/login', rootController.login);
router.post('/login', (req, res) => {
    res.body.email
    res.body.password
});

//halaman register
router.get('/register', rootController.register);
router.post('/register', (req, res) => {
    res.body.email
    res.body.password
});

//halaman update
router.get('/register', rootController.register);
router.post('/login', (req, res) => {
    res.body.email
    res.body.password
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });

router.get("/user/create", (req, res) => {
    res.render("user/create");
});

router.get("/user/read", (req, res) => {
    res.render("/user/read");
});

router.get("/user/update", (req, res) => {
    res.render("user/update");
});
router.get("/user/delete", (req, res) => {
    res.render("user/delete");
});
  
//kita exports
module.exports = router;