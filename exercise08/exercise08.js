'use strict'

var persons = [
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
];

function functionName (persons, ...ages) {
  var result = [];
  persons.map(person => {
    if (!ages.includes(person.edad)) result.push(person.name);
  });
  return result;
}

console.log(functionName(persons, 11).join('-'));

console.log(functionName(persons, 11,12,13,22).join('-'));