<script lang="ts">
	import FrameworkArticle from '#lib/components/framework/FrameworkArticle.svelte';
	import FrameworkContentBlocks from '#lib/components/framework/FrameworkContentBlocks.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const content = $derived(data.content);
</script>

<svelte:head>
	<title>{content.title} — Engagement Design</title>
	<meta name="description" content={content.metaDescription} />
</svelte:head>

<FrameworkArticle
	tag={content.tag}
	title={content.title}
	lead={content.lead}
	keyTerms={content.keyTerms}
	sources={content.sources}
>
	{#snippet content()}
		<FrameworkContentBlocks blocks={content.blocks} />
	{/snippet}
</FrameworkArticle>
