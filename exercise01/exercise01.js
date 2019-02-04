'use strict';
/*
 * Ejercicio 01:
 * Crear una función que reciba 2 parámetros, los cuales serán requeridos (no deben ser undefined).
 * Si falta alguno de los parámetros, se debe lanzar un mensaje de error.
 */
var functionsParameters = function (param1, param2) {
  return typeof param1 === 'undefined' || typeof param2 === 'undefined' ? 'Error' : 'Los parametros son ' + param1 + ' y ' + param2;
};

var param1 = undefined;
var param2 = 'producto2';
var param3 = 'producto3';

console.log('Cuando el primer parámetro es undefined: '+ functionsParameters(param1, param2));
console.log('Cuando el segundo parámetro es undefined: '+ functionsParameters(param2, param1));
console.log('Cuando el ambos parámetros es undefined: '+ functionsParameters(undefined, undefined));
console.log('Cuando ambos parámetros toman un valor: '+ functionsParameters(param2, param3));