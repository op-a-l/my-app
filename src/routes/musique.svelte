<script lang="ts">
	import { projects } from '$lib/projects';

	import { visibleCard } from '$lib/index';

	function setCardId(idToSet: number) {
		visibleCard.set(idToSet);
	}
</script>

<main
	class="flex h-screen w-screen flex-col items-center justify-center bg-inherit md:h-screen"
	id="musique"
>
	<div
		class=" justify-left flex w-full flex-col gap-1 rounded-lg p-4 px-10 py-6 shadow-inner transition-all duration-500 hover:shadow-lg md:w-3/5 lg:w-2/5"
	>
		<h1 class="mb-5 mt-3 text-3xl">Projets</h1>
		<ul class="list w-1/1 flex flex-col gap-2">
			{#each projects as { name, link, icone: Icon, id } (name)}
				<li>
					<button
						on:click={() => {
							setCardId(id);
						}}
						class="hover:bg-secondary-500 flex w-full flex-row justify-between rounded-md p-1 px-3 py-2 transition-all hover:shadow-lg"
					>
						<div>
							{name}
						</div>
						<span class="dots flex-grow"></span>
						<div>
							<Icon />
						</div>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	.dots {
		border-bottom: dotted 2px black;
	}
</style>
