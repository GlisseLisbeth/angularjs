'use strict';

class TransformData {

  static validateHasBodyOrQueryReq(element, onlyBody, key1, key2 = '') {
      var result;
      if (onlyBody) {
          if (element.put && element.put.parameters && element.put.parameters.length > 0) {
              element.put.parameters.forEach(elm => {
                  if (elm.in === key1) {
                      result = true;
                  } else {
                      result = false;
                  }
              });
          } else {
              if (element.get.parameters && element.get.parameters.length > 0) {
                  element.get.parameters.forEach(elm => {
                      if (elm.in === key1) {
                          result = true;
                      } else {
                          result = false;
                      }
                  });
              }
          }
      } else {
          if (element.get.parameters && element.get.parameters.length > 0) {
              element.get.parameters.forEach(elm => {
                  if (elm.in === key2 || elm.in === key1) {
                      result = true;
                  } else {
                      result = false;
                  }
              });
          }
      }            
      return result;
  }

  static existParameters(element) {
      var result;
      if (element.get || element.put) {
          if ((element.get.parameters && element.get.parameters.length > 0) || (element.put.parameters && element.put.parameters.length > 0)) {
              result = true;
          } else {
              result = false;
          }
      }
      return result;
  }

  static validateHasProperty(element, key) {
      var result = {};
      if (element.put && element.put.parameters && element.put.parameters.length > 0) {
          element.put.parameters.forEach(elm => {
              if (elm.in === key) {
                  result = {
                      value: true,
                      type: key
                  }
              } else {
                  result = {
                      value: false,
                      type: ''
                  }
              }
          });
      } else {
          if (element.get.parameters && element.get.parameters.length > 0) {
              element.get.parameters.forEach(elm => {
                  if (elm.in === key) {
                      result = {
                          value: true,
                          type: key
                      }
                  } else {
                      result = {
                          value: false,
                          type: ''
                      }
                  }
              });
          }
      }
      return result;
  }

  static generateParams(element) {
      var newArray = new Array();
      if(element.get.parameters.length) {
          newArray = element.get.parameters.map(param => {
              const obj = {
                  name: param.name,
                  isRequired: param.required,
                  comma: ((element.get.parameters).indexOf(param) === element.get.parameters.length - 1) ? false : true,
                  isBoolean: (typeof param.type === 'boolean') ? true : false,
                  isNumber: (typeof param.type === 'number') ? true : false,
                  isString: (typeof param.type === 'string') ? true : false
              }
              return obj;
          })
      }
      return newArray;
  }

  static TransformObj(element) {
      var arrayParams = new Array();
      arrayParams = TransformData.generateParams(element);
      return {
          consumes: element.get.consumes[0],
            hasBodyOrQueryReq: TransformData.validateHasBodyOrQueryReq(element, false, 'query', 'body'),
            hasBodyReq: TransformData.validateHasBodyOrQueryReq(element, true, 'body'),
            hasParameters: TransformData.existParameters(element),
            hasPathReq: TransformData.validateHasBodyOrQueryReq(element, true, 'path'),
            hasQueryreq: TransformData.validateHasProperty(element, 'query').value,
            httpMethod: 'get',
            parameters: {
              body: {
                isRequired: TransformData.validateHasProperty(element, 'body').value,
              },
              path: {
                  isRequired: TransformData.validateHasProperty(element, 'query').value,
              },
              query: {
                modelName: TransformData.validateHasProperty(element, 'query').value,
                params: arrayParams
              }
            },
            path: element.path
      }

  }
}

function getJSON (url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

function objectToArray(obj) {
  return Object.keys(obj).map(i => obj[i]);
}
  


(function() {  
  getJSON('trama-examen-fe-1.json', function(error, objectPath) {
    if(error) {return console.log (error.message);}
    var tramaConFormato = [];
    var auxTramaConFormato = new Array();
    var tramaConFormato = new Array();
    var arrayElements = Object.keys(objectPath.paths);
  
      if (arrayElements.length) {
        arrayElements.forEach(path => {
          var aux = { ...objectPath.paths[path], path: path }
          auxTramaConFormato.push(aux)
        })
        // map auxTramaConFormato
        if (auxTramaConFormato.length) {
          tramaConFormato = auxTramaConFormato.map(element => {
            var newObj = TransformData.TransformObj(element);
            return newObj;
        })
        alert('Revise la consola por favor')
        console.log('tramaConFormato: ', tramaConFormato)
      }
    } else {
      alert("Genere la trama ejemplo por favor.")
    }
  });
})();

