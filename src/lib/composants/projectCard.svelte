<script lang="ts">
	export let card;
	import { X } from 'lucide-svelte';
	// export let isVisible = false;

	import { visibleCard } from '$lib/index';

	let name = null;

	function closeCard() {
		visibleCard.set(null);
	}
</script>

<div class="flex h-screen w-full items-center justify-center bg-transparent backdrop-blur-lg">
	<div class="flex w-2/3 flex-col items-center justify-center md:w-2/6">
		<div
			class="bg-secondary-100 font-openSans relative w-auto rounded-lg border-2 border-solid border-black py-5 shadow-2xl"
		>
			<button class="btn absolute right-1 top-2 md:right-4 md:top-3" on:click={closeCard}>
				<X />
			</button>
			<h2 class="px-3 text-xl font-extrabold">
				{card.name}
			</h2>
			{#if card.subtitle}
				<h3 class="mb-3 object-cover px-3 text-lg font-semibold">
					{card.subtitle}
				</h3>
			{/if}
			{#if card.imageSrc}
				<div class="my-3 h-24 overflow-hidden bg-red-500">
					<img src={card.imageSrc} alt={card.imageAlt} class="h-full w-full object-cover" />
				</div>
			{:else}
				<hr />
			{/if}
			<p class="mx-5 mb-4 mt-4 max-h-60 overflow-scroll px-3 md:text-justify">
				{card.text}
			</p>
			{#if card.link}
				<div class="pl-5">
					<a href={card.link} class="font-humanist underline" target="_blank">External link</a>
				</div>
			{/if}
		</div>
	</div>
</div>
