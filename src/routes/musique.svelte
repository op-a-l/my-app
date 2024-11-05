<script lang="ts">
	import { Github, AudioLines, Bolt, Map } from 'lucide-svelte';
</script>

<main
	class="flex h-screen w-screen flex-col items-center justify-center bg-inherit md:h-screen"
	id="musique"
>
	<div class="justify-left col flex w-full flex-col p-4 md:w-3/5 lg:w-2/5">
		<h1 class="mb-5 text-3xl">Projets</h1>
		<ul
			class="list border-surface-500 flex flex-col rounded-xl border-2 border-solid bg-transparent bg-opacity-40 p-5 shadow-lg"
		>
			<li>
				<span><Github /></span>
				<span class="flex-auto"
					><a href="https://github.com/op-a-l/Max-workspace" target="_blank" class="underline"
						>Max::generative workspace</a
					></span
				>
			</li>
			<li>
				<span><AudioLines /></span>
				<span
					><a href="https://soundcloud.com/tournesol-840734247" target="_blank" class="underline"
						>Musique soundcloud</a
					></span
				>
			</li>
			<li>
				<span><Bolt /></span>
				<span><b>À venir</b> Hardware open source</span>
			</li>
			<li>
				<span><Map /></span>
				<span><b>À venir</b> Cartographies sonores</span>
			</li>
		</ul>
	</div>
</main>
