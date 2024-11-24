<script lang="ts">
	import { projects } from '$lib/projects';
</script>

<main
	class="flex h-screen w-screen flex-col items-center justify-center bg-inherit md:h-screen"
	id="musique"
>
	<div
		class="justify-left border-secondary-500 flex w-full flex-col gap-1 border-solid p-4 px-10 md:w-3/5 md:border-2 lg:w-2/5"
	>
		<h1 class="mb-5 text-3xl">Projets</h1>
		<ul class="list w-1/1 flex flex-col gap-2">
			{#each projects as { name, outLink, icone: Icon } (name)}
				<li>
					<a
						href={outLink}
						class="hover:bg-secondary-500 flex w-full flex-row justify-between rounded-md p-1 px-3 transition-all"
						target="_blank"
					>
						<div>
							{name}
						</div>
						<span class="dots flex-grow"></span>
						<div>
							<Icon />
						</div>
					</a>
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
