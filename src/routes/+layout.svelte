<script lang="ts">
	import '../app.css';
	import '../global.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>_opal</title>
	<meta
		name="description"
		content="_opal est un compositeur de musique électronique basé à Rennes. Bienvenue sur son site personnel."
	/>
</svelte:head>

{@render children()}
