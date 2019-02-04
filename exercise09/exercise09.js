'use strict'

function nameDrink(stringCode) {
  var drinks = [
    {
      code: 'code1',
      name: 'limonada'
    },
    {
      code: 'code2',
      name: 'fanta'
    },
    {
      code: 'code3',
      name: 'cerveza'
    },
    {
      code: 'code4',
      name: 'kerosene'
    },
    {
      code: 'code5',
      name: 'gasolina'
    },
    {
      code: 'code6',
      name: 'chicharra'
    },
    {
      code: 'code7',
      name: 'pisco'
    },
    {
      code: 'code8',
      name: 'punto g'
    },
    {
      code: 'code923',
      name: 'ron'
    },
    {
      code: 'code10',
      name: 'leche'
    },
    {
      code: 'code11',
      name: 'quaker'
    },
    {
      code: 'code12',
      name: 'guarana'
    }
  ];

  function isDrink(drink) {
    return drink.code === stringCode;
  }
  
  var foundDrink = drinks.find(isDrink) || {};
  
  return (Object.keys(foundDrink).length === 0) ? console.log("Estoy tomando agua de jamaica") : console.log(`Estoy tomando ${foundDrink.name}`);
}

nameDrink('code1');
nameDrink('code923');
nameDrink('code12');
nameDrink('code11231');
nameDrink('');