<script lang="ts">
	import { Download } from 'lucide-svelte';
</script>

<main class="align-center flex h-screen flex-col items-center">
	<section class="items-left flex h-screen w-auto flex-col justify-center p-10">
		<h1 class="text-md md:text-2xl">HI, I am</h1>
		<h1 class="font-humanist text-3xl font-bold md:text-5xl">_opal</h1>
		<h1 class="text-md md:text-2xl">composer and sound designer</h1>
	</section>
	<section class="fixed bottom-20 md:bottom-10 z-50 flex-row gap-2 flex w-full justify-center">
		<audio controls class="rounded-lg shadow-lg w-1/2">
			<source src="/audio/bandeDemo.mp3" type="audio/mpeg" />
			Votre navigateur ne supporte pas la lecture audio.
		  </audio>
		  <a
		  href="/audio/bandeDemo.mp3"
		  download="bandeDemo_opal.mp3"
		  title="Télécharger la bande démo"
	  >
		  <Download size={15} />
	  </a>
	</section>
</main>
