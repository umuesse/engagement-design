<script lang="ts">
	import Callout from '#lib/components/framework/Callout.svelte';
	import type { ContentBlock } from '#lib/data/frameworkContent/types';

	interface Props {
		blocks: ContentBlock[];
	}

	let { blocks }: Props = $props();
</script>

{#each blocks as block, index (index)}
	{#if block.type === 'h2'}
		<h2>{block.text}</h2>
	{:else if block.type === 'p'}
		<p>{@html block.text}</p>
	{:else if block.type === 'ul'}
		<ul>
			{#each block.items as item (item)}
				<li>{@html item}</li>
			{/each}
		</ul>
	{:else if block.type === 'callout'}
		<Callout title={block.title} variant={block.variant ?? 'insight'}>
			{#each block.paragraphs as paragraph (paragraph)}
				<p>{paragraph}</p>
			{/each}
		</Callout>
	{/if}
{/each}

<style>
	h2 {
		margin: 2rem 0 0.75rem;
		font-size: 1.25rem;
	}

	h2:first-child {
		margin-top: 0;
	}

	p {
		font-size: 1rem;
		line-height: 1.65;
	}

	ul {
		padding-left: 1.2rem;
		display: grid;
		gap: 0.45rem;
		font-size: 1rem;
		line-height: 1.6;
	}
</style>
