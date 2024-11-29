<script lang="ts">
	import TreeNode from './skillsTree.svelte';
	export let node;
	export let level = 0;

	import { Card } from '$lib/index';
</script>

<div class="m-3 flex h-auto w-full bg-opacity-50 pl-5 md:pl-10">
	<div class="w- flex h-auto flex-col">
		<ul>
			<li class="w-full font-mono">
				{#if node.url}
					{node.name}
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
