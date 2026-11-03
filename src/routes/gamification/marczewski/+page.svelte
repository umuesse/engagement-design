<script lang="ts">
	import FrameworkContentBlocks from '#lib/components/framework/FrameworkContentBlocks.svelte';
	import FrameworkArticle from '#lib/components/framework/FrameworkArticle.svelte';
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
	hubHref="/gamification"
	hubLabel="Gamification"
	backHref="/gamification"
	backLabel="Zurück zu Gamification"
>
	{#snippet articleBody()}
		<FrameworkContentBlocks blocks={article.blocks} />
	{/snippet}
</FrameworkArticle>
