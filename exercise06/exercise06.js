'use strict'
/*
 * Ejercicio 06:
 * Dado el siguiente código, realizar la invocación del método 
 * 'speak' del objeto cat, para imprimir en consola el valor 
 * de la propiedad 'sound' del objeto 'dog'. */

var talk = talky;
var cat = {
  speak: talk,
  sound: 'miau'
}
var dog = {
  speak: cat.speak,
  sound: 'wof'
}
function talky() {
  console.log(this.sound);
}

cat.speak.call(dog);