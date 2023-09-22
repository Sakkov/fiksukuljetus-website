<script lang="ts">
	import Navbar from "./Navbar.svelte";

	import Logo from '$lib/Images/Fiksukuljetuslogo1_0_kuusikulmiotaustalla.svg'
</script>



<div class="logo">
	<img
		src={Logo}
		alt="Fiksukuljetus Oy muutto pirkanmaa"
		width="500"
		height="500"
	/>
</div>

<Navbar />