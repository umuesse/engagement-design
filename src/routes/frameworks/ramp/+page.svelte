<script lang="ts">
	import FrameworkArticle from '#lib/components/framework/FrameworkArticle.svelte';
	import type { FrameworkKeyTerm } from '#lib/data/frameworkContent/types';
	import RampContent, { metadata } from '../../../content/frameworks/ramp.svx';
	import { rampReferences } from '../../../content/frameworks/ramp.references';

	type RampFrontmatter = {
		title: string;
		tag: string;
		lead: string;
		metaDescription: string;
		keyTerms: FrameworkKeyTerm[];
	};

	const { title, tag, lead, metaDescription, keyTerms } = metadata as RampFrontmatter;
</script>

<svelte:head>
	<title>{title} — Engagement Design</title>
	<meta name="description" content={metaDescription} />
</svelte:head>

<FrameworkArticle {tag} {title} {lead} {keyTerms} references={rampReferences}>
	{#snippet articleBody()}
		<div class="framework-markdown">
			<RampContent />
		</div>
	{/snippet}
</FrameworkArticle>

<style>
	.framework-markdown :global(table) {
		width: 100%;
		min-width: 28rem;
		border-collapse: collapse;
		font-size: 0.9375rem;
		line-height: 1.5;
		margin: 1.25rem 0;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		overflow: hidden;
		background: var(--color-surface-solid);
		display: block;
		overflow-x: auto;
	}

	.framework-markdown :global(thead) {
		background: var(--color-accent-soft);
	}

	.framework-markdown :global(th),
	.framework-markdown :global(td) {
		padding: 0.65rem 0.75rem;
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid var(--color-border);
	}

	.framework-markdown :global(th) {
		font-weight: 650;
	}

	.framework-markdown :global(tbody tr:last-child td),
	.framework-markdown :global(tbody tr:last-child th) {
		border-bottom: none;
	}

	.framework-markdown :global(em) {
		font-style: italic;
	}

	.framework-markdown :global(p em:only-child),
	.framework-markdown :global(p > em) {
		font-style: italic;
	}
</style>
