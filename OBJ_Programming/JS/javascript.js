//Deklarer en klasse som heter klassenavn
class klassenavn {
  constructor(programfag, klassetrinn) {
    this.programfag = programfag;
    this.klassetrinn = klassetrinn;
  }
};
//lage en instans av klassen - oppreter en klasse
let i2ta = new klassenavn('Informasjonsteknologi', 'vg2');
console.log(i2ta);





//matte
class sirkel {
  constructor(radius) {
    this.radius = radius;
    this.diameter = radius * 2;
  }
  finnomkrets() {
    return (this.diameter * Math.PI)
  }
  finnareal() {
    return (Math.PI) * ((this.radius) * (this.radius))
  }
}
let sirkelexample = new sirkel(3);
let omkrets = sirkelexample.finnomkrets();
let areal = sirkelexample.finnareal();
console.log('areal:', omkrets.toFixed(2));
console.log('omkrets:', areal.toFixed(2));





// sylinder
class sylinder extends sirkel{
  constructor(radius, høyde) {
    super(radius);
    this.høyde = høyde;
  }
  finnvolum() {
    return this.finnareal() * this.høyde;
  }
}
let sylinderinstanse = new sylinder(3, 4);
let volum_av_sylinder = sylinderinstanse.finnvolum();
console.log(volum_av_sylinder);





// Oppgave 4.03 a, b, c
class dinalder {
  constructor(navn, birthdate, calender) {
    this.navn = navn;
    this.birthdate = birthdate;
  }
  finnAlder() {
    let calender = new Date(2022);
    return Math.abs(calender - this.birthdate);
  }
}
let dinalderValue = new dinalder("Ola", 2000);
let alder = dinalderValue.finnAlder();
console.log(alder);

function ola() {
  document.getElementById('visOla').innerHTML = "Hei, " + dinalderValue.navn + "! " + "Du er " + alder + " år gammel."
};

// oppgave d
function input() {
  let inputValue = new dinalder(
    document.getElementById('name').value,
    document.getElementById('birthdate').value
  );
  let age = inputValue.finnAlder();
  document.getElementById('visPerson').innerHTML = "Du heter " + document.getElementById('name').value + " og du er " + document.getElementById('birthdate').value + " år gammel.";
}





// oppgave 4.06
