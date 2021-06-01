const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

if(app.listen(4500)){
    console.log("Server runnning at https://127.0.0.1:4500/");
}

app.get(['/', '/index'], (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/getapp', (req, res) => {
    res.render('getapp');
});

app.use((req, res) => {
    res.render('error');
});