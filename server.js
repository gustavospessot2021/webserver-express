const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const puerto = process.env.PORT || 8080;

//const puerto = 8080;

// ESTO SIEMPRE SE EJECUTA !!!
app.use(express.static(__dirname + '/public'));

// EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


// estaban los helpers!!

// ************* RESPUESTA A LOS GETs ******************

// luego de poner el express.static y crear el index.html
// no se ejecutará el siguiente GET si existe el archivo index.html.
// Si no existe ese archivo, se ejecutará lo siguiente:
app.get('/', function(req, res) {
    res.render('home', {
        nombre: "gUsTavo sPEssoT"
    });
});

app.get('/about', function(req, res) {
    res.render('about');
});


app.get('/hola', function(req, res) {
    res.send('Hola Mundo, esta es la pag de /')
});


app.get('/data', (req, res) => {

    let salida = {
        nombre: "Gustavo Spessot",
        cargo: "Desarrollador JavaScript",
        fecha_nac: "09/05/1984",
        salario: 42500,
        url: req.url
    }

    res.send(salida);
});



app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}...`);
});