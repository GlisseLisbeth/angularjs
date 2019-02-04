'use strict';
/*
 * Ejercicio 02:
 * Escribir un programa que permita encontrar la suma acumulada de los cubos
 * impares de los números enteros entre 1 y 1000.Empleando una combinación
 * de las funciones map, reduce, filter. Deberás implementar
 * tus propias funciones map, reduce, filter, recibiendo funciones
 * anónimas como parámetros.
 * No podrás utilizar mutación de variables, por lo cual deberás
 * utilizar técnicas recursivas
 * para realizar dicha implementación
 */

const INITIAL = 1;
const FINISH = 1000;
const incremental = 1;  
var arrayEval = new Array();

for(var i = INITIAL ; i <= FINISH; i++){
  arrayEval.push(i);
}
var filterProp = function(array) {
  var filterArray = [];
  array.forEach(function(element) {
    if(element % 2 > 0)
      filterArray.push(element);
  });
  return filterArray;
};

var mapProp = function(array) {
  var arrayMap = [];
  array.forEach((element) => {
      arrayMap.push(element ** 3);
  });
  return arrayMap;
};

var reduceProp = (array, initial) => {
  var accumulator = initial || 0;
  array.forEach((_element, index) => {
      accumulator +=  array[index];
  });
  return accumulator;
};

  arrayEval = filterProp(arrayEval).mapProp(arrayEval).reduceProp(arrayEval);
  
  console.log("El resultado es: " + arrayEval);
