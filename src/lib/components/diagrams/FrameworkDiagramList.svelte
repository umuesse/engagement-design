<script lang="ts">
	import type { FrameworkDiagramId } from '#lib/data/frameworkContent/types';
	import FrameworkDiagram from './FrameworkDiagram.svelte';

	interface Props {
		ids: FrameworkDiagramId[];
	}

	let { ids }: Props = $props();
</script>

{#if ids.length > 0}
	<div class="framework-diagram-list" role="presentation">
		{#each ids as id (id)}
			<FrameworkDiagram {id} />
		{/each}
	</div>
{/if}

<style>
	.framework-diagram-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 0 0 0.5rem;
		width: 100%;
	}

	.framework-diagram-list :global(.framework-diagram) {
		margin: 0;
		width: 100%;
	}
</style>
