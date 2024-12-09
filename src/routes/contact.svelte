<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { Mail, Instagram, Youtube } from 'lucide-svelte';
</script>

<main
	class="flex h-auto w-screen flex-row items-center justify-center p-5 md:justify-start"
	id="contact"
>
	<button class="btn" title="contact par courriel"
		><a href="mailto:contact@opal-sounds.com"><Mail /></a></button
	>
	<button class="btn" title="page instagram"
		><a href="https://www.instagram.com/_________opal/" target="_blank"><Instagram /></a></button
	>
	<button class="btn" title="chaîne youtube"
		><a href="https://www.youtube.com/@opal.elektronaut/featured" target="_blank"><Youtube /></a
		></button
	>
</main>
