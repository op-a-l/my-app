<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { fade } from 'svelte/transition';
	let tabSet: number = 0;
</script>

<div class="flex h-screen flex-col items-center justify-center" id="tools">
	<section
		class="flex h-auto w-full flex-col p-4 text-justify shadow-xl transition-all duration-200 hover:rounded-2xl md:w-3/5 lg:w-2/5"
	>
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>
				<span class="font-bold">Composition</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1} class="font-bold">Sound design</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2} class="font-bold">Programmation</Tab>

			<!-- Tab Panels -->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<p in:fade={{ duration: 300 }}>
						Je compose une musique électronique hybridant synthèse et enregistrement héritière de la
						culture expérimentale du XXème siècle. Mon travail de composition est principalement
						fait sur Bitwig Sudio.
					</p>
				{:else if tabSet === 1}
					<p in:fade={{ duration: 300 }}>
						Ma pratique s'articule autour du son et de sa création. Je travaille principalement la
						synthèse sonore et ce que l'on pourrait qualifier d'une orchestration électronique. Mon
						but est d'agencer les sons dans le temps et l'espace pour en tirer un sens. J'utilise
						Max, Bitwig et quelques boîtes musicales d'Elektron.
					</p>
				{:else if tabSet === 2}
					<p in:fade={{ duration: 300 }}>
						Un autre pan de ma pratique est celui de la programmation. Cela consiste en la création
						de routines informatiques générant des notes, des sons ou des rythmes. Je travaille
						principalement sur Max et développe des outils hardware Teensy. Je pratique également le
						développement web comme loisir avec Sveltekit.
					</p>
				{/if}
			</svelte:fragment>
		</TabGroup>
	</section>
</div>
