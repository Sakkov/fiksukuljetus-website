<script lang="ts">
	import './styles.css';
    import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean = false;
	const options: Options = {
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div class="app" use:inview={options} on:inview_change={handleChange}>

    <div class="container">
        {#if isInView}
        <Hero />
        {/if}
    
        <main>
            <slot />
        </main>
    
        <Footer />
    </div>
</div>

<style>

    :global(body) {
        background-color: var(--MediumColor1);
        background-image: linear-gradient( rgba(235, 242, 255, 0.1), rgba(235, 242, 255, 0.8)), url($lib/Images/background_80_w854.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        text-align: center;
    }
</style>
