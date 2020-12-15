var request = require('supertest');
app = require('./index_variables.js');

describe("GET", function(){
    it("Debería obtener los libros", function(done){
        request(app)
            .get("/libros")
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it("Debería obtener un libro concreto", function(done){
        request(app)
            .get("/libro/1")
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe("PUT", function(){
    it("Debería añadir un nuevo libro", function(done){
        request(app)
            .put("/libro/3/Divergente")
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});