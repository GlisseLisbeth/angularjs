'use strict'

var persons = [
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
];

function demo (persons) {
    var personFilter = [];
    var personCond = [];

    personFilter = persons.filter(person => person.donacion && person.esposas.length >= 1);
    if(personFilter && personFilter.length) {
        personFilter.map(wifes => {
            wifes.esposas.map(element => {
              if (element.startsWith('Y') || element.startsWith('N')) {
                personCond.push(wifes.name);
              }
            });
        });
    }
    return personCond;
}

console.log(demo(persons).join('-'));