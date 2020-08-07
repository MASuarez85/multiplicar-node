const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject('la base debe ser un numero');
            return;
        }

        if (!Number(limite)) {
            reject('El limite debe ser un numero');
            return;
        }

        let imprimir = '';

        for (let i = 1; i <= limite; i++) {
            imprimir += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(console.log(imprimir));
    })
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
};