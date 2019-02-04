'use strict';
/*
 * Ejercicio 02:
 * Crear un programa en el cual al dar click a cada elemento con la clase '.item', 
 * se modifique el contenido con la hora actual.
 * Considerar, la siguiente estructura con 6666 elementos 'li'
 * <ul>
 * <li class="item">item 1</li>
 * <li class="item">item 2</li>
 * <li class="item">item 3</li>
 * .
 * .
 * .
 * <li class="item">item 6666</li>
 * </ul>
 */

 var list = document.getElementById("list");

window.addEventListener('load', function(){
    for (var i = 0; i < 6666; i++) {
      var fragment = document.createDocumentFragment();
      elementoLi = document.createElement("li");
      elementoLi.setAttribute("class","item");
      elementoLi.innerHTML = "item " + (i + 1);
      fragment.appendChild(elementoLi);
      list.appendChild(fragment);
    };
  });

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement; 
}

list.onclick = function(event) {
  var target = getEventTarget(event);
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var temp = "" + ((hours > 12) ? hours - 12 : hours);
  if (hours == 0) temp = "12";
  temp += ((minutes < 10) ? ":0" : ":") + minutes;
  temp += ((seconds < 10) ? ":0" : ":") + seconds;
  temp += (hours >= 12) ? " P.M." : " A.M.";
  target.innerHTML = temp;
};