const dotenv = require('dotenv').config();
const { response } = require('express');
var express = require('express');
var app = express();
var port = process.env.PORT || 6000;

var libros = {};
libros[1] = "Los Juegos del Hambre";
libros[2] = "El Corredor del Laberinto";

app.get('/libros', (req, res) => {
    res.status(200);
    res.header("Content-Type",'application/json');
    res.send(
        JSON.stringify(libros)
    );
})

app.get('/libro/:id', (req, res) => {
    res.status(200);
    res.header("Content-Type",'application/json');
    res.send(
        JSON.stringify(libros[req.params.id])
    );
})

app.put('/libro/:id/:titulo', (req, res) => {
    libros[req.params.id] = req.params.titulo; 
    res.status(200);
    res.header("Content-Type",'application/json');
    res.send(
        "OK!"
    );
})

app.listen(port);

module.exports = app;