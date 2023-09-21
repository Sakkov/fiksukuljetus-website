<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly, draw, slide } from 'svelte/transition';

	let links = [
		{ name: 'Koti', href: '/' },
		{
			name: 'Muuttopalvelut',
			dropDown: [
				{ name: 'Kotimuutot', href: '/kotimuutot' },
				{ name: 'Yritysmuutot', href: '/yritysmuutot' }
			]
		},
		{ name: 'Pianonkuljetus', href: '/pianonkuljetus' },
		{ name: 'Painavat tavarat', href: '/painavattavarat' },
		{ name: 'Muut palvelut', href: '/muutpalvelut' },
		{
			name: 'FiksuWiki',
			dropDown: [
				{ name: 'Haalaus', href: '/haalaus' },
				{ name: 'Muutto', href: '/muuttowiki' }
			]
		},
		{ name: 'Yhteystiedot', href: '/yhteystiedot' },
		{ name: 'Ota Yhteyttä!', href: '/yhteydenottolomake' }
	];

	let showMenu = false;
	function toggleMenu() {
		showMenu = !showMenu;
	}

    $: ariaLabel = showMenu ? 'close menu' : 'toggle menu';

	// Handle clicks outside of the dropdown
	document.addEventListener('click', function (event: any) {
		var dropdown: HTMLElement | null = document.querySelector('.dropdown-content');
		if (!dropdown) return;
        var isClickInside = dropdown.contains(event.target) || event.target.matches('.dropbtn');

		if (!isClickInside && dropdown.style.display === 'block') {
			dropdown.style.display = 'none';
		}
	});

	document.querySelectorAll('.dropbtn').forEach(function (btn) {
		btn.addEventListener('click', function () {
			var dropdown: HTMLElement | null = btn.nextElementSibling as HTMLElement;
            if (!dropdown) return;
			dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
		});
	});
</script>

<nav id="navbar" class="content">
	<button
		class="menu-icon"
		on:click={toggleMenu}
		aria-expanded={showMenu}
		aria-label={ariaLabel}
		transition:fade={{ duration: 500, delay: 500 }}
	>
		<svg
			class:open={showMenu}
			viewBox="0 0 100 100"
			fill="none"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
		>
			<path
				class="top"
				d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
			/>
			<path class="middle" d="m 30,50 h 40" />
			<path
				class="bottom"
				d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
			/>
		</svg>
	</button>

	<!-- Desktop Navigation -->
	<div class="nav__list desktop-links">
		<div id="myLinks desktop-links">
			{#each links as link (link.name)}
				{#if link.href}
					<div class="nav__list-item">
						<a
							class={$page.url.pathname === link.href ? 'active nav-link' : 'nav-link'}
							href={link.href}
						>
							{link.name}
						</a>
					</div>
				{:else if link.dropDown}
					<div class="nav__list-item dropdown">
						<span class="dropbtn nav-link">Muuttopalvelut<span class="dropdown-arrow" /></span>
						<div class="dropdown-content">
							{#each link.dropDown as dropDown (dropDown.href)}
								<a
									class={$page.url.pathname === dropDown.href ? 'active nav-link' : 'nav-link'}
									href={dropDown.href}
								>
									{dropDown.name}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if showMenu}
		<div class="nav__list">
			<div id="myLinks" class:show={showMenu}>
				{#each links as link (link.name)}
					{#if link.href}
						<div class="nav__list-item">
							<a
								class={$page.url.pathname === link.href ? 'active nav-link' : 'nav-link'}
								href={link.href}
                                on:click={toggleMenu}
							>
								{link.name}
							</a>
						</div>
					{:else if link.dropDown}
						<div class="nav__list-item dropdown">
							<span class="dropbtn nav-link">Muuttopalvelut<span class="dropdown-arrow" /></span>
							<div class="dropdown-content">
								{#each link.dropDown as dropDown (dropDown.href)}
									<a
										class={$page.url.pathname === dropDown.href ? 'active nav-link' : 'nav-link'}
										href={dropDown.href}
                                        on:click={toggleMenu}
									>
										{dropDown.name}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	#navbar {
		transition: all 0.3s ease;
		max-width: 1000px;
		text-align: center;
		padding: 0px;
		top: 0;
		position: sticky;
        box-shadow: none;
		z-index: 999;
        background-color: white;
	}

	.nav__list {
		width: 100%;
		max-width: 1000px;
	}

	#myLinks {
		margin: auto;
	}

	.nav__list .nav-link {
		display: block;
		padding: 8px 12px;
		transition: all 0.3s ease;
		text-decoration: none;
		color: var(--MediumColor1);
	}

	.nav__list-item {
		display: inline-block;
	}

	.nav__list-item .nav-link {
		padding: 20px 10px;
	}

	.nav__list-item .nav-link:hover {
		color: var(--HighLightColor);
		transition: all 0.3s ease;
		transform: scale(1.2);
	}

	.nav__list-item .nav-link.active {
		font-weight: 900;
	}

	/* Styles for the hamburger menu icon */
	.menu-icon {
		display: none;
		background: none;
		border: none;
	}

	.menu-icon svg {
		width: 69px;
		height: auto;
	}

	:root {
		--transition-duration: 400ms;
	}

	svg {
		transition: transform var(--transition-duration);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.middle {
		transform-origin: 50%;
		transition: transform var(--transition-duration);
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.open {
		transform: rotate(45deg);
		color: var(--HighLightColor1);
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}

	/* Hide links by default on small screens */
	#myLinks {
		display: none;
	}

	.desktop-links {
		display: block;
	}

	/* Show links when the show class is present */
	#myLinks.show {
		display: block;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: white;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		border-radius: 10px;
		border: 5px solid var(--MediumLightColor1);
	}

	.dropdown-content a {
		padding: 7px 11px;
		text-decoration: none;
		display: block;
		border-radius: 10px;
		border: 5px solid transparent;
	}

	.dropdown-content a:hover {
		border: 5px solid var(--MediumLightColor1);
		background-color: var(--LightColor2);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.dropbtn {
		padding: 0;
	}

	.dropdown-arrow {
		display: inline-block;
		margin-left: 2px;
		margin-bottom: 2px;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid var(--MediumLightColor1);
	}

	.dropdown:hover .dropdown-arrow {
		border-top: 5px solid var(--HighLightColor);
	}

	/* MEDIA QUERIES */
	@media only screen and (max-width: 960px) {
		#navbar {
			position: fixed;
			top: 0;
			right: 0;
			width: fit-content;
			outline-width: 5px;
			outline-color: var(--MediumColor1);
			outline-style: solid;
			margin: 10px 0;
			border-radius: 10px 0 0 10px;
			text-align: right;
			transition: none;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row-reverse;
		}

		.desktop-links {
			display: none;
		}

		#myLinks {
			display: none;
			text-align: center;
			padding: 5px;
			overflow-y: auto;
			max-height: 80vh;
		}

		.menu-icon {
			display: flex;
            width: 70px;
            height: 70px;
            align-items: center;
            padding: 0;
            margin: 0;
            background-color: var(--LightColor2);
            outline: none;
		}
        
		#myLinks .nav__list-item {
			flex-direction: column;
		}

		.nav__list-item {
			display: block;
			width: fit-content;
			width: 100%;
		}

		.nav__list-item .nav-link {
			padding: 1rem;
			margin: 0.5rem;
			background-color: var(--LightColor2);
			border-radius: 10px;
		}

		.nav__list-item .nav-link:hover {
			color: var(--HighLightColor);
			transition: all 0.3s ease;
			transform: scale(1.1);
		}

		.dropdown-content {
			left: 0;
			right: 0;
			margin: auto;
			overflow-y: auto;
			max-height: 80vh;
		}

		.dropdown-content a {
			padding: 1rem;
			margin: 0.1rem;
		}
	}
</style>
