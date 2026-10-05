'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado
let presupuesto = 0;
// TODO: Variable global


function actualizarPresupuesto(presupuestoActualizado) {
    if(!isNaN(presupuestoActualizado) && presupuestoActualizado > 0){
        presupuesto = presupuestoActualizado;
        return presupuesto;
    }
    else{
        return -1
        console.log('blabla')
    }

}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`
}

function CrearGasto(descripcion, valor) {
    if(typeof valor === "number" && valor > 0){
            this.valor = valor;   
            this.descripcion = descripcion;   
    }
    else{
        this.valor = 0;
        this.descripcion = descripcion;
    }

    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    };

    this.actualizarDescripcion = function(nuevadesc){
        this.descripcion = nuevadesc;
    }
    
    this.actualizarValor = function(nuevovalor) {
    if (typeof nuevovalor === "number" && !isNaN(nuevovalor) && nuevovalor >= 0) {
        this.valor = nuevovalor;
        return this.valor;
    } else {
        return -1;
    }
}

    return this;
}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
