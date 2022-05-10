console.clear();
const colors = require('colors');
const { crearArchivo} = require ('./helpers/multiplicar');
const argv = require ('./config/yargs');

crearArchivo (argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.rainbow(nombreArchivo),'Creado'))
    .catch(err => console.log(err));
