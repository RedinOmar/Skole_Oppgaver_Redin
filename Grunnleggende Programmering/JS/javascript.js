/* oppgave 1 */

/* A */
/* datatypen er number */
let testA = 8;
console.log(testA);

/* B */
/* datatypen er string */
let testB = "testverdi";
console.log(testB);

/* C */
let produkt = 2 * 3
console.log(produkt);

/* D */
let fraction = 2 / 3;
console.log(fraction);

/* E */
/* Jeg har brukt consol.log for å vise svarene */

/* Oppgave 2 */

/* A */
function kvadrat() {
  let side1 = 8;
  let side2 = 8;
  let kvadrat = side1 * side2;
  document.getElementById('kvadrat-value').innerHTML = "Arealet til kvadrat er" + " " + kvadrat;
  console.log(kvadrat);
}

/* B */
function trekant() {
  let side1 = 5;
  let side2 = 5;
  let trekant1 = side1 * side2;
  let trekant2 = trekant1 / 2;
  document.getElementById('trekant-value').innerHTML = "Arealet til trekant er" + " " + trekant2;
  console.log(trekant2);
}
