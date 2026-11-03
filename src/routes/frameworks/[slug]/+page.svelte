<script lang="ts">
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
	sources={article.sources}
>
	{#snippet articleBody()}
		<FrameworkContentBlocks blocks={article.blocks} />
	{/snippet}
</FrameworkArticle>
