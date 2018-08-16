const fs = require('fs');


let listadoPorHacer = [];

const guardardb = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    //después de hacer pusch a listado por hacer, se guarda con la función.
    guardardb();

    return porHacer;

}

const listar = (completado = true) => {
    cargarDB();
    let nuevolistado = listadoPorHacer.filter(tarea => tarea.completado === JSON.parse(completado));
    if (nuevolistado.length >= 0) {
        listadoPorHacer = nuevolistado;
        return listadoPorHacer;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // Sin func de flecha
    // listadoPorHacer.findIndex( tarea =>  {
    //    return tarea.descripcion === descripcion; 
    //})

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardardb();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    // filtro los elementos que tengan descripción distinta a la enviada, se guarda en nuevolistado
    let nuevolistado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    // let nuevolistado = listadoPorHacer.filter(tarea => {
    //     return tarea.descripcion !== descripcion
    // });

    if (listadoPorHacer.length !== nuevolistado.length) {
        listadoPorHacer = nuevolistado;
        guardardb();
        return true;
    } else {
        return false;
    }


}




module.exports = {

    crear,
    listar,
    actualizar,
    borrar

}