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
  constructor(navn, fødselsår, kalender) {
    this.navn = navn;
    this.fødselsår = fødselsår;
    this.kalender = kalender;
  }
  finnalder() {
    return Math.abs(this.kalender - this.fødselsår);
  }
}
let dinalderValue = new dinalder("Ola", 2000, 2022);
let alder = dinalderValue.finnalder();
console.log(alder);





class inputAlder {
  constructor(nameValue, fødselsårValue, kalenderValue) {
    this.nameValue = nameValue;
    this.fødselsårValue = fødselsårValue;
    this.kalenderValue = kalenderValue;
  }
  calculateAge(nameInput, ageInput) {
    nameInput = document.getElementById('name').value;
    ageInput = document.getElementById('age').value;
    this.nameValue = nameInput;
    this.fødselsårValue = ageInput;
    return Math.abs(this.nameValue - this.fødselsårValue);
    document.getElementById('nameAndage').innerHTML = age.nameValue + ageValue;
  }
}
let age = new inputAlder(this.nameValue, this.fødselsårValue, 2022);
let ageValue = age.calculateAge();
console.log(ageValue);
