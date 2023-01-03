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


class dinalder {
  constructor(navn, fødselsår, kalender) {
    this.navn = "Ola";
    this.fødselsår = 2000;
    this.kalender = kalender;
  }
  finnalder() {
    return
  }
}
let person = new dinalder('Ola', 2000, '');
console.log(person);
