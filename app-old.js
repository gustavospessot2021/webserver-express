const { read } = require('fs');
const http = require('http');

const puerto = 8080;

const proc1 = () => {
    http.createServer((req, res) => {

            res.write('Hola Mundo, soy Gustavo Spessot');
            res.end();
        })
        .listen(puerto);

    console.log(`Escuchando puerto ${puerto}`);
}

const proc2 = () => {
    http.createServer((req, res) => {

            res.writeHead(200, { 'Content-Type': 'application/json' });

            let salida = {
                nombre: "Gustavo Spessot",
                cargo: "Desarrollador JavaScript",
                fecha_nac: "09/05/1984",
                salario: 42500,
                url: req.url
            }

            res.write(JSON.stringify(salida));
            res.end();
        })
        .listen(puerto);

    console.log(`Escuchando puerto ${puerto}`);
}


const op = 2;

switch (op) {
    case 1:
        proc1();
        break;
    case 2:
        proc2();
        break;
    default:
        console.log("Ningun servidor disponible");
}