<script lang="ts">
	import { Card } from '$lib/index';
	import { projects } from '$lib/projects';
	export let content = projects[0];
</script>

<Card card={content} />
