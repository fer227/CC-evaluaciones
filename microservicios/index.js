const dotenv = require('dotenv').config();
const { response } = require('express');
var express = require('express');
var app = express();
var port = process.env.PORT || 6000;

app.get('/libros', (req, res) => {
    let libros = [
        {
            titulo: "Los Juegos del Hambre",
            autor: "Suzanne Collins"
        },
        {
            titulo: "El Corredor del Laberinto",
            autor: "James Dashner"
        }
    ];
    
    res.status(200);
    res.header("Content-Type",'application/json');
    res.send(
        JSON.stringify(libros)
    );
})

app.listen(port);