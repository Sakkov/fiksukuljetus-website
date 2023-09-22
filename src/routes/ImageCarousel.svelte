<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Pesukone_kyytiin from '$lib/Images/pesukone_kyytiin.webp';
	import Paku_tayn_laatikoit from '$lib/Images/paku_tayn_laatikoit.webp';
	import Voimamies_sohva from '$lib/Images/voimamies_sohva.webp';
	import Tayspaku_80_w400 from '$lib/Images/tayspaku_80_w400.webp';

	let index = 0;
	let images: any;

	onMount(() => {
		images = document.querySelectorAll('.carousel__image');
		// Display the first image initially
		images[index].style.display = 'block';
	});

	function changeImage(n: number) {
		images[index].style.display = 'none';
		index = (index + n + images.length) % images.length;
		images[index].style.display = 'block';
	}

	let carousel_interval = setInterval(() => changeImage(1), 10000); // Change image every 10 seconds

	onDestroy(() => {
		clearInterval(carousel_interval); // Clear the interval to prevent memory leaks
	});
</script>

<div class="grid-img">
	<div class="image-container carousel">
		<img
			class="carousel__image"
			src={Pesukone_kyytiin}
			height="534"
			width="400"
			alt="muutto tampere"
		/>
		<img
			class="carousel__image"
			src={Paku_tayn_laatikoit}
			height="534"
			width="400"
			alt="tehokas muutto tampere"
		/>
		<img
			class="carousel__image"
			src={Voimamies_sohva}
			height="534"
			width="400"
			alt="voimakkaimmat tekijät"
		/>
		<img
			class="carousel__image"
			src={Tayspaku_80_w400}
			height="534"
			width="400"
			alt="muutto ylöjärvi tampere"
		/>
		<div
			class="carousel__prev"
			role="button"
			tabindex="0"
			on:click={() => changeImage(-1)}
			on:keydown={(e) => e.key === 'Enter' && changeImage(-1)}
		>
			&#10094;
		</div>

		<div
			class="carousel__next"
			role="button"
			tabindex="0"
			on:click={() => changeImage(1)}
			on:keydown={(e) => e.key === 'Enter' && changeImage(1)}
		>
			&#10095;
		</div>
	</div>
</div>
