<script>
	class DinAlder {
	  constructor(navn = "Kari", fødselsår = 2006) {
	    this.navn = navn
	    this.fødselsår = fødselsår
	  }
	
		//metode: finner alderen til en person 
  	finnAlder() {
  	  let dato = new Date();
			let dinAlder = dato.getFullYear() - 
this.fødselsår
  	  return dinAlder
 	 }
	
		//metode kommenterAlder
		kommenterAlder(x){
			let melding = ""
			if(x < 0){
				melding = "Oj! Du er ikke født engang!"
			}
			return melding 
		}
	}

	// bruken av class:
	let brukerAlder = new DinAlder()
</script>
