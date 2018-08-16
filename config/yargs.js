const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const crear = {
    descripcion
}

const actualizar = {
    descripcion,
    completado
}

const listar = {
    completado
}

const borrar = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizar)
    .command('listar', 'Muestra las tareas', listar)
    .command('borrar', 'Borra un elemento por hacer', borrar)
    .help()
    .argv;

module.exports = {
    argv
}