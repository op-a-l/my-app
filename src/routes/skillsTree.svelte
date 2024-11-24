<script lang="ts">
	import TreeNode from './skillsTree.svelte'; // Auto-importation pour la récursivité
	export let node; // Le nœud à afficher
	export let level = 0;
</script>

<div class="flex h-auto w-full items-center justify-center" id="tools">
	<div class="bg-secondary-200 flex h-auto w-2/5">
		<div class="flex h-auto w-full flex-col">
			<ul>
				<li class="w-full font-mono">
					{node.name}
					{#if node.children && node.children.length > 0}
						{#each node.children as child}
							<TreeNode node={child} level={level + 1} />
						{/each}
					{/if}
				</li>
			</ul>
		</div>
	</div>
</div>
