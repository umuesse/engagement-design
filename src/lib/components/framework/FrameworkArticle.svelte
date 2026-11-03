<script lang="ts">
	import type { Snippet } from 'svelte';

	export type KeyTerm = {
		term: string;
		definition: string;
	};

	export type Source = {
		label: string;
		note?: string;
		href?: string;
	};

	interface Props {
		tag: string;
		title: string;
		lead: string;
		keyTerms?: KeyTerm[];
		sources?: Source[];
		backHref?: string;
		backLabel?: string;
		articleBody: Snippet;
		sidebar?: Snippet;
	}

	let {
		tag,
		title,
		lead,
		keyTerms = [],
		sources = [],
		backHref = '/frameworks',
		backLabel = 'Zurück zum Framework-Hub',
		articleBody,
		sidebar
	}: Props = $props();
</script>

<article class="framework-article">
	<nav class="breadcrumb" aria-label="Breadcrumb">
		<ol>
			<li><a href="/">Start</a></li>
			<li aria-hidden="true">/</li>
			<li><a href="/frameworks">Frameworks</a></li>
			<li aria-hidden="true">/</li>
			<li><span aria-current="page">{title}</span></li>
		</ol>
	</nav>

	<header class="article-header">
		<p class="tag">{tag}</p>
		<h1>{title}</h1>
		<p class="lead">{lead}</p>
	</header>

	<div class="article-grid" class:has-sidebar={!!sidebar || keyTerms.length > 0}>
		<div class="article-main">
			{@render articleBody()}

			{#if sources.length > 0}
				<section class="sources glass-panel" aria-labelledby="sources-title">
					<h2 id="sources-title">Quellen &amp; Pflichtlektüre</h2>
					<ul>
						{#each sources as source (source.label)}
							<li>
								{#if source.href}
									<a href={source.href} rel="noopener noreferrer" target="_blank">{source.label}</a>
								{:else}
									<span class="source-label">{source.label}</span>
								{/if}
								{#if source.note}
									<span class="source-note"> — {source.note}</span>
								{/if}
							</li>
						{/each}
					</ul>
				</section>
			{/if}

			<p class="back-link">
				<a class="link-arrow" href={backHref}>{backLabel} →</a>
			</p>
		</div>

		{#if sidebar}
			<aside class="article-sidebar">
				{@render sidebar()}
			</aside>
		{:else if keyTerms.length > 0}
			<aside class="article-sidebar" aria-labelledby="terms-title">
				<div class="terms glass-panel">
					<h2 id="terms-title">Kernbegriffe</h2>
					<dl>
						{#each keyTerms as entry (entry.term)}
							<div class="term-row">
								<dt>{entry.term}</dt>
								<dd>{entry.definition}</dd>
							</div>
						{/each}
					</dl>
				</div>
			</aside>
		{/if}
	</div>
</article>

<style>
	.breadcrumb ol {
		list-style: none;
		margin: 0 0 1.25rem;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		font-size: 0.8125rem;
		color: var(--color-muted);
	}

	.breadcrumb a {
		font-weight: 600;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.breadcrumb span[aria-current='page'] {
		color: var(--color-text);
		font-weight: 650;
	}

	.article-header {
		margin-bottom: 2rem;
		max-width: 44rem;
	}

	.tag {
		display: inline-block;
		margin: 0 0 0.75rem;
		padding: 0.28rem 0.65rem;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		border-radius: 999px;
		background: var(--color-accent-soft);
		color: var(--color-accent-strong);
		border: 1px solid rgba(124, 58, 237, 0.15);
	}

	h1 {
		margin: 0 0 0.85rem;
		font-size: clamp(1.85rem, 4vw, 2.45rem);
		line-height: 1.12;
		background: var(--gradient-brand);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	.lead {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.65;
		color: var(--color-muted);
	}

	.article-grid {
		display: grid;
		gap: 1.5rem;
	}

	.article-grid.has-sidebar {
		grid-template-columns: minmax(0, 1fr) minmax(14rem, 18rem);
		align-items: start;
	}

	.article-main :global(h2) {
		margin: 2rem 0 0.75rem;
		font-size: 1.25rem;
	}

	.article-main :global(h2:first-child) {
		margin-top: 0;
	}

	.article-main :global(p),
	.article-main :global(ul) {
		font-size: 1rem;
		line-height: 1.65;
		color: var(--color-text);
	}

	.article-main :global(ul) {
		padding-left: 1.2rem;
		display: grid;
		gap: 0.45rem;
	}

	.sources {
		margin-top: 2rem;
		padding: 1.15rem 1.2rem;
	}

	.sources h2 {
		margin: 0 0 0.75rem;
		font-size: 1.05rem;
	}

	.sources ul {
		margin: 0;
		padding-left: 1.15rem;
		display: grid;
		gap: 0.55rem;
		font-size: 0.9375rem;
	}

	.source-label {
		font-weight: 600;
	}

	.source-note {
		color: var(--color-muted);
	}

	.back-link {
		margin: 2rem 0 0;
	}

	.terms {
		padding: 1rem 1.05rem;
		position: sticky;
		top: 5.5rem;
	}

	.terms h2 {
		margin: 0 0 0.85rem;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-muted);
	}

	dl {
		margin: 0;
		display: grid;
		gap: 0.85rem;
	}

	dt {
		font-weight: 700;
		font-size: 0.9rem;
	}

	dd {
		margin: 0.2rem 0 0;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--color-muted);
	}

	@media (max-width: 52rem) {
		.article-grid.has-sidebar {
			grid-template-columns: 1fr;
		}

		.terms {
			position: static;
		}
	}
</style>
