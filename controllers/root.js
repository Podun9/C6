//fungsi dari handler home
const home = (req, res) => {
    res.render('index.ejs');
}

//fungsi dari handler game
const game = (req, res) => {
    res.render('game.ejs');
}

//halaman login 
const login = (req, res) => {
    res.render('login.ejs');
}

//halaman register
const register = (req, res) => {
    res.render('register.ejs');
}

//supaya fungsi bisa di panggil di root ki exports
module.exports = {
    home,
    game,
    login,
    register
}