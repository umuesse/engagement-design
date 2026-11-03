<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.entry.title} — bald verfügbar</title>
</svelte:head>

<nav class="breadcrumb" aria-label="Breadcrumb">
	<ol>
		<li><a href="/">Start</a></li>
		<li aria-hidden="true">/</li>
		<li><a href="/frameworks">Frameworks</a></li>
		<li aria-hidden="true">/</li>
		<li><span aria-current="page">{data.entry.shortLabel}</span></li>
	</ol>
</nav>

<PageIntro
	tag="Coming soon"
	title={data.entry.title}
	lead={data.entry.summary}
/>

<div class="glass-panel soon">
	<p>
		Diese Vertiefungsseite wird in einem der nächsten Goldfish-Slices ergänzt. Bis dahin findest du den Überblick
		im <a href="/frameworks">Framework-Hub</a> und passende Themen in der
		<a href="/modul/inputphase">Inputphase</a>.
	</p>
	{#if data.entry.slug !== 'sdt'}
		<p>
			Bereits verfügbar: <a class="link-arrow" href="/frameworks/sdt">Self-Determination Theory (SDT) →</a>
		</p>
	{/if}
</div>

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

	.soon p {
		margin: 0 0 1rem;
		line-height: 1.6;
		color: var(--color-muted);
		max-width: 40rem;
	}

	.soon p:last-child {
		margin-bottom: 0;
	}
</style>
