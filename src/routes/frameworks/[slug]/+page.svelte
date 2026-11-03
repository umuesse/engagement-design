<script lang="ts">
	import FrameworkDiagramList from '#lib/components/diagrams/FrameworkDiagramList.svelte';
	import FrameworkArticle from '#lib/components/framework/FrameworkArticle.svelte';
	import FrameworkContentBlocks from '#lib/components/framework/FrameworkContentBlocks.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const article = $derived(data.content);
</script>

<svelte:head>
	<title>{article.title} — Engagement Design</title>
	<meta name="description" content={article.metaDescription} />
</svelte:head>

<FrameworkArticle
	tag={article.tag}
	title={article.title}
	lead={article.lead}
	keyTerms={article.keyTerms}
	sources={article.sources ?? []}
	references={article.references ?? []}
>
	{#snippet articleBody()}
		{#if article.sections?.length}
			{#each article.sections as section, index (index)}
				{#if section.blocksBeforeDiagram?.length}
					<FrameworkContentBlocks blocks={section.blocksBeforeDiagram} />
				{/if}
				{#if section.diagramIds?.length}
					<FrameworkDiagramList ids={section.diagramIds} />
				{/if}
				{#if section.blocks.length}
					<FrameworkContentBlocks blocks={section.blocks} />
				{/if}
			{/each}
		{:else}
			<FrameworkDiagramList ids={article.diagramIds} />
			<FrameworkContentBlocks blocks={article.blocks} />
		{/if}
	{/snippet}
</FrameworkArticle>
