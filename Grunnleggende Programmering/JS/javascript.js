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

/* C */
function rectanglebutton(lengde, bredde) {
  lengde = document.getElementById('lengde').value;
  bredde = document.getElementById('bredde').value;
  document.getElementById('rektangelvalue').innerHTML = "arealet til rektagelen er: " + lengde * bredde;
}

function trekantbutton(lengde, bredde) {
  lengde = document.getElementById('lengde').value;
  bredde = document.getElementById('bredde').value;
  document.getElementById('trekantvalue').innerHTML = "arealet til trekanten er: " + lengde * bredde / 2;
}

/* Oppgave 3 */
/* A */
/* Måten input funker på python, er at det gir brukeren mulighet for å skrive inn hvilket som helst verdi inni inputten.
vis jeg for eksempel skriver navnet mitt i et input, så vil verdien være oppdatert til navnet mitt i innputten.*/

/* B */
function values(lang_value_retriever) {
  lang_value_retriever = document.getElementById('lang_input').value;
  if (lang_value_retriever === "n") {
    document.getElementById('lang_retriever').innerHTML = "Du er Norsk ";
  }
  else if (lang_value_retriever === "s") {
    document.getElementById('lang_retriever').innerHTML = "Du er Svensk ";
  }
  else if (lang_value_retriever === "d") {
    document.getElementById('lang_retriever').innerHTML = "Du er Dansk ";
  }
  else {
    document.getElementById('lang_retriever').innerHTML = "Du har ikke skrevet noe ";
  }
};
