//Importa los modulos que vamos a ocupar  
let fs = require('fs');

//Le indicamos el modulo y la acción con tres parámetros. 1o archivo que deseamos leer. 2o parametro opcional (carácteres), 3o Callback con dos parametros, error y el archivo
const readFiles = () => {
    fs.readFile(docname, 'utf-8', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            const regExp = /(https?:\/\/[^\s]+)/g;
            const result = data.match(regExp);
            console.log(data);
            console.log(`links: ${result}`)
        }
    });
}

console.log(readFiles)