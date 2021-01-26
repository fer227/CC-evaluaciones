await fetch('http://0.0.0.0:6000/libros', {
    method: 'GET'    
}).then((resultado) => {
    console.log(resultado);
})