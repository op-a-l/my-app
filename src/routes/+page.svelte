<script lang="ts">
	import Navbar from './navbar.svelte';
	import Bienvenue from './bienvenue.svelte';
	import Biographie from './biographie.svelte';
	import Tools from './skillsTree.svelte';
	import Musique from './musique.svelte';
	import Services from './services.svelte';
	import Contact from './contact.svelte';
	import Card from './cardDisplayer.svelte';

	import { skillsTree } from '$lib/skills';

	import { ArrowDownToDot } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const scrollPosition = writable(0);

	let showNavbar = true;
	let lastScrollY = 0;

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			showNavbar = currentScrollY < lastScrollY;

			scrollPosition.set(currentScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);

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
	<Services />

	<!-- <div class="flex items-center justify-center">
		<div class="flex h-auto w-4/5 items-center justify-center pb-10 md:w-2/6" id="tools">
			<Tools node={skillsTree} />
		</div>
	</div> -->

	<Card />

	<Contact />
</main>
