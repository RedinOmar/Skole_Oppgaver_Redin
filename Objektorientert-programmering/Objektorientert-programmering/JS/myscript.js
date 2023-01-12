//Deklarerer en klasse som heter Klassenavn
class Klassenavn {
    constructor(programfag, klassetrinn) {
        this.programfag = programfag;
        this.klassetrinn = klassetrinn;
    }
}

//Lage en instans av klassen - Opprette en klasse
let i2ta = new Klassenavn('Informasjonsteknologi', 'vg2');

class Sirkel {
    constructor(radius) {
        this.radius = radius;
        this.diameter = radius * 2;
    }

finnOmkrets() {
    return (this.diameter * Math.PI)
}

finnAreal() {
    return (Math.PI)*((this.radius)*(this.radius))
}

}

/*let sirkelExample = new Sirkel(3);

let omkrets_av_sirkel = sirkelExample.finnOmkrets();
let areal_av_sirkel = sirkelExample.finnAreal();
console.log('Areal i kvadratmeter:', areal_av_sirkel.toFixed(2));
console.log('Omkrets i meter:', omkrets_av_sirkel.toFixed(2));*/

class Sylinder extends Sirkel {
    constructor(radius, hoyde) {
        super(radius);
        this.hoyde = hoyde;
    }

    finnVolum() {
   
        return this.finnAreal() * this.hoyde;

    }
}

let SylinderInstance = new Sylinder(3, 4);
let volum_av_sylinder = SylinderInstance.finnVolum();
console.log(volum_av_sylinder);
































/*class Kontakt {
    constructor(fornavn, etternavn, epostadresse) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epostadresse;
    }

    settSammenFulltNavn() {
        console.log(what);
        return 'Hei, '+this.fornavn + ' ' + this.etternavn + 'What!';
    }
}


class KontaktExtended extends Kontakt {
    constructor(gittNavn, slektsnavn, epostadresse) {
        super(gittNavn, slektsnavn, epostadresse);
    }

    settSammenFulltNavn() {
        return "This is what " +this.slektsnavn+' Epost adresse'+epostadresse;
    }
} */