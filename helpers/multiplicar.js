const fs = require('fs');
const colors = require('colors');


const crearArchivo =(base , listar, hasta )=>{
    
    return new Promise( (resolve, reject)=> {
        
        let salida = '';
        let consola ='';

        for(let i=1; i<=hasta; i++){
            salida += `${ base } x ${ i } = ${ base*i }\n`;
            consola += colors.rainbow(`${ base } x ${ i } = ${ base*i }\n`);
            
        }
        if(listar){
            console.log ('====================='.yellow);
            console.log ('    Tabla del'.bold, colors.bold(base));
            console.log ('====================='.yellow);
            console.log (consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 
        resolve(`tabla-${base} `);
        

    });
    

}

module.exports = { 
    crearArchivo
}