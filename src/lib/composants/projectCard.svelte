<script lang="ts">
	export let card;
	import { X } from 'lucide-svelte';
	// export let isVisible = false;

	import { visibleCard } from '$lib/index';

	let name = null;

	function setActive(cardId: number) {
		visibleCard.set(cardId);
	}

	function closeCard() {
		visibleCard.set(null);
	}
</script>

<div class="flex h-screen w-full items-center justify-center bg-transparent backdrop-blur-lg">
	<div class="flex w-2/3 flex-col items-center justify-center md:w-2/6">
		<div
			class="bg-secondary-100 font-openSans relative w-auto rounded-lg border-2 border-solid border-black py-5 shadow-2xl"
		>
			<button class="btn absolute right-1 top-2 md:right-4 md:top-4" on:click={closeCard}>
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
				<div class="h-24 overflow-hidden bg-red-500">
					<img src={card.imageSrc} alt={card.imageAlt} class="h-full w-full object-cover" />
				</div>
			{:else}
				<hr />
			{/if}
			<p class="mb-4 mt-3 px-3">
				{card.text}
			</p>
			{#if card.link}
				<div class="pl-3">
					<a href={card.link} class="font-mono underline" target="_blank">Lien externe</a>
				</div>
			{/if}
		</div>
	</div>
</div>
