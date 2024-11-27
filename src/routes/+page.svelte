<script lang="ts">
	import Navbar from './navbar.svelte';
	import Bienvenue from './bienvenue.svelte';
	import Biographie from './biographie.svelte';
	import Tools from './skillsTree.svelte';
	import Musique from './musique.svelte';
	import Contact from './contact.svelte';

	import { skillsTree } from '$lib/skills';

	import { Card } from '$lib/index';

	import { ArrowDownToDot } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const scrollPosition = writable(0);

	let showNavbar = true; // Contrôle l'affichage de la navbar
	let lastScrollY = 0; // Dernière position de scroll connue

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// On affiche la navbar si on scrolle vers le haut, sinon on la masque
			showNavbar = currentScrollY < lastScrollY;

			// Met à jour la position actuelle dans le store et la dernière position
			scrollPosition.set(currentScrollY);
			lastScrollY = currentScrollY;
		};

		// Ajoute l'écouteur d'événement scroll
		window.addEventListener('scroll', handleScroll);

		// Retire l'écouteur d'événement au démontage du composant
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<main class="bg-primary-500 font-openSans flex h-auto flex-col justify-center">
	{#if showNavbar}
		<div transition:fade={{ duration: 300 }}>
			<Navbar />
		</div>
	{/if}
	<div class="absolute bottom-10 left-10 h-auto w-auto">
		<ArrowDownToDot />
	</div>
	<Bienvenue />
	<Biographie />
	<Musique />
	<div class="flex items-center justify-center">
		<div class="flex h-auto w-4/5 items-center justify-center pb-10 md:w-2/6" id="tools">
			<Tools node={skillsTree} />
		</div>
	</div>
	<Contact />
	<Card />
</main>
