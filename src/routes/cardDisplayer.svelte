<script lang="ts">
	import { Card } from '$lib/index';

	import { visibleCard, projects } from '$lib/index';

	import { fade } from 'svelte/transition';

	$: visibleId = $visibleCard;

	export const cardData = {
		name: 'TestName',
		subtitle: 'test subtitle',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum justo tellus. Donec egestas tortor sit amet dolor pellentesque mollis. Curabitur est nisi, venenatis id libero eget, luctus maximus orci.',
		imageSrc:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZG0m6pCBCX80u06nEtxCcAHaDz%26pid%3DApi&f=1&ipt=a6d3d3519848f3a6f442bd3e533e51b704887b39cfb65586c77b6261d2b949cb&ipo=images',
		imageAlt: 'dessin numérique génératif basé sur du Perlin noise'
	};
</script>

{#if visibleId !== null}
	<div class="fixed top-0 z-10 w-full">
		<Card card={projects[visibleId]} />
	</div>
{/if}
