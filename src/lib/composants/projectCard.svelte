<script lang="ts">
	export let card;
</script>

<div class="w-10">
	<div>
		<h2>
			{card.name}
		</h2>
		{#if card.subtitle}
			{card.subtitle}
		{/if}
	</div>
	<p>
		{card.text}
	</p>
</div>
