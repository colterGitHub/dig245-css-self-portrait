
/* javascript */

const page = document.querySelector("body");
const position = document.getElementById('position');
const portrait = document.querySelector("div.portrait");
const portraitElements = portrait.querySelectorAll("div");

var elementCount = portraitElements.length;

function updatePosition(event) {
  var x = event.pageX;
  var y = event.pageY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  position.innerText = coords;
}

page.addEventListener("mousemove", updatePosition, false);
page.addEventListener("mouseenter", updatePosition, false);
page.addEventListener("mouseleave", updatePosition, false);



var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
console.log(elementCount);
