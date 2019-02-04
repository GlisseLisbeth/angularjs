# angularjs
Reto de Multiplica

1.- Crear una función que reciba 2 parámetros, los cuales serán requeridos (no deben ser undefined). Si falta alguno de los parámetros, se debe lanzar un mensaje de error.

2.- Escribir un programa que permita encontrar la suma acumulada de los cubos impares de los números enteros entre 1 y 1000.

Empleando una combinación de las funciones map, reduce, filter. Deberás implementar tus propias funciones map, reduce, filter, recibiendo funciones anónimas como parámetros.

No podrás utilizar mutación de variables, por lo cual deberás utilizar técnicas recursivas para realizar dicha implementación.

 3.- Crear un programa en el cual al dar click a cada elemento con la clase '.item', se modifique el contenido con la hora actual.
Considerar, la siguiente estructura con 6666 elementos 'li'

<ul>
  <li class="item">item 1</li>
  <li class="item">item 2</li>
  <li class="item">item 3</li>
  .
  .
  .
  <li class="item">item 6666</li>
</ul>

4.- Estamos desarrollando el juego 'Age Star Craft', en el cual el usuario podrá crear varios personajes según las razas que elija.

Actualmente hay 3 razas principales: Protoss, Terran y Zerg; y también se podrá crear razas personalizadas, las cuales podrán heredar de una de las razas principales, y/o tener habilidades extras.

Ahora, las razas principales heredan habilidades de la clase 'guerrero'.

Escriba el programa en el cual cree "n" instancias (que serían los jugadores) de los objetos creados (personajes principales y/o personalizados).
OJO: Se deberá crear las 5 instancias (1 por cada raza (Protoss, Terran, Zerg, Custom1, Custom2)).




5.- Dado el obj del archivo trama-examen-1.json, crear la lógica para generar la siguiente estructura (array de objetos)



6.- Dado el siguiente código, realizar la invocación del método 'speak' del objeto cat, para imprimir en consola el valor de la propiedad 'sound' del objeto 'dog'.

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


7.- Dado el sgte array, retornar solo los NOMBRES de las personas que donan órganos y que tienen 1 o más esposas, cuyo nombre empieze con 'Y' o 'N'.

[
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: []
  }
]

8.- Dado el sgte array de personas, crear una función que reciba dicho array y las edades (1 o N parámetros) por las cuales se desea excluir a las personas, retornando solo el nombre de dichas personas.

Por ejemplo, podría ser: functionName(arr, 11) o functionName(arr, 11, 12, 13, ...)

// Array de personas:
[
  {
    name: 'Pepe',
    edad: 11
  },
  {
    name: 'Juan',
    edad: 22
  },
  {
    name: 'Lalo',
    edad: 33
  }
]

9.- Crear una función la cual reciba como parámetro el código de una bebida, y según las siguientes condicionales nos imprima en consola el siguiente mensaje:
‘Estoy tomando NOMBRE_DE_BEBIDA’

El nombre de la bebida por defecto para los códigos que no existan es: ‘agua de jamaica’.


Casos:
- code1: limonada
- code2: fanta
- code3: cerveza
- code4: kerosene
- code5: gasolina
- code6: chicharra
- code7: pisco
- code8: punto g
- code923: ron
- code10: leche
- code11: quaker
- code12: guarana

10.- Realizar el sgte CRUD en AngularJS.

Agregar, Editar, Eliminar, Listar y Filtrar
