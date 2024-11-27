<script lang="ts">
	import TreeNode from './skillsTree.svelte';
	export let node;
	export let level = 0;

	function openCard() {}
</script>

<div class="m-3 flex h-auto w-full bg-opacity-50 pl-5 md:pl-10">
	<div class="w- flex h-auto flex-col">
		<ul>
			<li class="w-full font-mono">
				{#if node.url}
					<button on:click={openCard()} class="btn">
						{node.name}
					</button>
				{:else}
					{node.name}
				{/if}
				{#if node.children && node.children.length > 0}
					{#each node.children as child}
						<TreeNode node={child} level={level + 1} />
					{/each}
				{/if}
			</li>
		</ul>
	</div>
</div>

<style>
	button {
		text-decoration: underline;
	}
</style>
