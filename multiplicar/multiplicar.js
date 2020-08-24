const fs = require('fs');
const colors = require('colors');

//Listar Tabla
let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`=Tabla de ${ base }=`.red);
    console.log('==================='.green);

    //mostrar por consola los resultados de esta funcion
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        //si el numero ingresado no es un numero
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(`El valor ingresado ${ base }, no es un numero`)
            else
                resolve(`tabla-${ base }`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}