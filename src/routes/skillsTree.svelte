<script lang="ts">
	import TreeNode from './skillsTree.svelte'; // Auto-importation pour la récursivité
	export let node; // Le nœud à afficher
</script>

<div class="flex w-full items-center justify-start">
	<div class="flex h-auto flex-col justify-start">
		<ul>
			<li>
				{node.name}
				{#if node.children && node.children.length > 0}
					{#each node.children as child}
						<div class="tabulation">
							<TreeNode node={child} />
						</div>
					{/each}
				{/if}
			</li>
		</ul>
	</div>
</div>

<style>
	.tabulation {
		position: relative;
		transform: translateX(2rem);
	}
</style>
