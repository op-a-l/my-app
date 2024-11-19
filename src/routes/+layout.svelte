<script lang="ts">
	import '../app.css';
	import '../global.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>opal</title>
	<meta
		name="description"
		content="opal est un compositeur de musique électronique basé à Rennes. Il explore l'expressivité des outils numériques et leur capacité à exprimer le réel. Bienvenue sur son site personnel."
	/>
</svelte:head>

{@render children()}
