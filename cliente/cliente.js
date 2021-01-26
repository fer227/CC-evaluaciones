const fetch = require("node-fetch");

async function getData(){

    // await new Promise(resolve => setTimeout(resolve, 1200));

    return await fetch('http://localhost:6000/libros', {
        method: 'GET'    
    });
}

function handlerRequest(){
    getData().then((response) => {
        console.log(response.json().then((res) => {console.log(res)}));
    }).catch((error) => {
        console.log(error);
    }) 
}

setTimeout(handlerRequest, 500);
