// Henter DOM-elementer fra HTML-filen og lagrer dem i variabler
const rectangle = document.getElementById("rectangle");
const rectangle2 = document.getElementById("rectangle2");
const pointsElement = document.getElementById("points");

// Setter variabler for posisjonene til rektanglene og maksimumsverdier for å unngå at de går utenfor vinduet
let x = 0;
let y = 0;
let maxX = window.innerWidth - rectangle.offsetWidth;
let maxY = window.innerHeight - rectangle.offsetHeight;

let x2 = 100;
let y2 = 100;
let maxX2 = window.innerWidth - rectangle2.offsetWidth;
let maxY2 = window.innerHeight - rectangle2.offsetHeight;

// Setter variabel for poengsummen
let points = 0;

// Setter i gang en funksjon som skal kjøre kontinuerlig med jevne mellomrom (90 millisekunder)
setInterval(() => {
  // Lager et tilfeldig tall mellom 0 og 3 og lagrer det i variabelen "rand"
  const rand = Math.floor(Math.random() * 4);
  
  // Gjør en handling basert på hvilket tall som ble generert av "rand"
  switch (rand) {
    case 0: // beveg opp
      y2 = Math.max(0, y2 - 30);
      break;
    case 1: // beveg til høyre
      x2 = Math.min(maxX2, x2 + 30);
      break;
    case 2: // beveg ned
      y2 = Math.min(maxY2, y2 + 30);
      break;
    case 3: // beveg til venstre
      x2 = Math.max(0, x2 - 30);
      break;
  }

  // Oppdater posisjonen til rectangle2
  rectangle2.style.left = `${x2}px`;
  rectangle2.style.top = `${y2}px`;

  // Sjekk om det har vært kollisjon mellom rektangel 1 og rektangel 2
  if (x2 < x + rectangle.offsetWidth &&
      x2 + rectangle2.offsetWidth > x &&
      y2 < y + rectangle.offsetHeight &&
      y2 + rectangle2.offsetHeight > y) {
    // Trekk fra 10 poeng og sørg for at poengsummen aldri går under 1
    points -= 10;
    points = Math.max(1, points);
    // Oppdater poengsum-elementet i HTML-filen med den nye poengsummen
    pointsElement.innerText = points;
  }
}, 90);

// Setter i gang en funksjon som skal kjøre hver gang en tast på tastaturet trykkes ned
function moveRect(e) {
  // Gjør en handling basert på hvilken tast som ble trykket ned
  switch(e.keyCode) {
    case 65: // A-tasten
      x = Math.max(0, x - 20);
      break;
    case 87: // W-tasten
      y = Math.max(0, y - 20);
      break;
    case 68: // D-tasten
      x = Math.min(maxX, x + 20);
      break;
    case 83: // S-tasten
      y = Math.min(maxY, y + 20);
      break;
  }

 // Setter posisjonen til et rektangel ved hjelp av x- og y-verdier
rectangle.style.left = `${x}px`;
rectangle.style.top = `${y}px`;
}
// Legger til en lytter på dokumentet for å reagere på tastetrykk og kalle på moveRect-funksjonen
document.addEventListener("keydown", moveRect);

// Henter en <p> element inne i rektangelet og endrer dens tekstinnhold til "Daniel"
var nameElement = rectangle.querySelector("p");
nameElement.innerHTML = "Daniel";

// Setter opp en funksjon som øker en poengteller hvert sekund og viser resultatet på et HTML-element med id-en "points"
setInterval(() => {
  points++;
  pointsElement.innerText = points;
}, 1000);

// Setter opp en funksjon som øker størrelsen på et annet rektangel (`rectangle2`) med en faktor på 1.1 (dvs. 10% større) og flytter det horisontalt mot høyre, men holder seg innenfor en maksimumsgrense. Dette gjentas hvert 60.000 millisekunder (dvs. hvert minutt)
setInterval(() => {
  const width = rectangle2.offsetWidth * 1.1;
  const height = rectangle2.offsetHeight * 1.1;
  const left = Math.min(maxX2 - width, x2);
  rectangle2.style.width = `${width}px`;
  rectangle2.style.height = `${height}px`;
  rectangle2.style.left = `${left}px`;
  rectangle2.style.top = `${y2}px`;
}, 60000)