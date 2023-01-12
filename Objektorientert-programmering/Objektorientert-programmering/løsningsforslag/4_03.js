<script>
let dato = new Date(); //for å hente årstallet
class DinAlder {
  constructor(navn, fødselsår) {
    this.navn = navn;
    this.fødselsår = fødselsår
		this.alder = dato.getFullYear() - this.fødselsår
  }
}

// Oppretter et objekt av klassen DinAlder
let brukerAlder = new DinAlder("Ola", 2000)
</script>

<style> 
	h1{color: green}
</style>

<h1> Hei {brukerAlder.navn}! </h1>
<h2> Du er {brukerAlder.alder} år gammel. </h2>
