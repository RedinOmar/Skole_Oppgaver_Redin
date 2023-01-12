<script>
	class Rektangel {
		constructor (lengde, bredde){
			this.lengde = lengde
			this.bredde = bredde
			this.omkrets = 2*lengde + 2*bredde
			this.areal = lengde*bredde
		}
	}
	let rektangel = new Rektangel(5,2)
</script>

<h1>Rektangel</h1>
<p>Rektangelet har lengden {rektangel.lengde} og bredden 
{rektangel.bredde}.<br> Omkretsen til rektangelet er 
{rektangel.omkrets}. <br> Arealet til rektangelet er 
{rektangel.areal}.</p>
