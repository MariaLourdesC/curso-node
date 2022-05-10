const { describe } = require('yargs');

const argv = require ('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla'
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la lista generada'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Define hasta que numero genera la tabla'
                    })
                    .check ((argv,options)=>{
                        if( isNaN(argv.b)){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;