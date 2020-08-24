const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//obtener el comando que se esta ingresando por consola 
let comando = argv._[0];

switch (comando) {
    //si el comando ingresado es listar
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

        //si el comando ingresado es crear
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }.txt`.green))
            .catch(e => console.log(e));
        break;

        //Si ningun comando coincide
    default:
        console.log('Comando no reconocido');
}


//console.log(argv.base);



//let parametro = argv[2];
//let base = parametro.split('=')[1];