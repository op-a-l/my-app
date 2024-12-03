<script lang="ts">
	import '../app.css';
	import '../global.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>_opal</title>
	<meta
		name="description"
		content="opal est un compositeur de musique électronique basé à Rennes. Il explore l'expressivité des outils numériques et leur capacité à exprimer le réel. Bienvenue sur son site personnel."
	/>
	<meta
		name="keywords"
		content="musique, électronique, rennes, art, artiste, composition, sound design"
	/>
	<link rel="canonical" href="https://www.opal-sounds.com" />
</svelte:head>

{@render children()}
