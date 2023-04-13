var rectangle = document.getElementById("rectangle");
var x = 0;
var y = 0;
var maxX = window.innerWidth - rectangle.offsetWidth;
var maxY = window.innerHeight - rectangle.offsetHeight;

function moveRect(e) {
  switch(e.keyCode) {
    case 65: // A key
      x = Math.max(0, x - 10);
      break;
    case 87: // W key
      y = Math.max(0, y - 10);
      break;
    case 68: // D key
      x = Math.min(maxX, x + 10);
      break;
    case 83: // S key
      y = Math.min(maxY, y + 10);
      break;
  }
  rectangle.style.left = x + "px";
  rectangle.style.top = y + "px";
}

document.addEventListener("keydown", moveRect);

var nameElement = rectangle.querySelector("p");
nameElement.innerHTML = "Daniel";
