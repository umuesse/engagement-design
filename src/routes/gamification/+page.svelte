<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import GamificationTopicList from '#lib/components/gamification/GamificationTopicList.svelte';
	import {
		gamificationFrameworkLinks,
		gamificationMeta,
		gamificationSubsections,
		gamificationTopicItems
	} from '#lib/data/gamificationSection';
</script>

<svelte:head>
	<title>{gamificationMeta.title} — Engagement Design</title>
	<meta name="description" content={gamificationMeta.metaDescription} />
</svelte:head>

<PageIntro tag={gamificationMeta.tag} title={gamificationMeta.title} lead={gamificationMeta.lead} />

<section class="glass-panel topic-hub" aria-labelledby="gamification-topics-title">
	<h2 id="gamification-topics-title">Gamification-Frameworks &amp; Vertiefungen</h2>
	<p class="section-intro text-muted">
		Eigenständige Artikel in diesem Bereich — getrennt von der allgemeinen <a href="/frameworks">Framework-Übersicht</a>.
	</p>
	<GamificationTopicList items={gamificationTopicItems} />
</section>

{#each gamificationSubsections as section (section.id)}
	<section class="glass-panel content-section" aria-labelledby="{section.id}-title">
		<h2 id="{section.id}-title">{section.title}</h2>
		{#each section.paragraphs as paragraph, i (`${section.id}-${i}`)}
			<p class="section-text">{paragraph}</p>
		{/each}
		{#if section.relatedLink}
			<p class="related-link">
				<a href={section.relatedLink.href}>→ {section.relatedLink.label}</a>
			</p>
		{/if}
	</section>
{/each}

<section class="glass-panel" aria-labelledby="framework-links-title">
	<h2 id="framework-links-title">Framework-Vertiefungen</h2>
	<p class="section-intro text-muted">
		Gamification im Modul ist bewusst <strong>eigenständig</strong> — vertiefe Mechanik, Ethik und Motivation
		über die passenden Framework-Seiten.
	</p>
	<ul class="framework-link-list">
		{#each gamificationFrameworkLinks as link (link.href)}
			<li>
				<a href={link.href}>{link.label}</a>
				<span class="link-desc">{link.description}</span>
			</li>
		{/each}
	</ul>
</section>

<section class="glass-panel next" aria-labelledby="next-title">
	<h2 id="next-title">Weiter im Modul</h2>
	<p>
		Nach der Einordnung geht es in der <a href="/modul/inputphase">Inputphase</a> Schritt für Schritt durch
		Theorie und Frameworks — oder direkt zur <a href="/frameworks">Framework-Übersicht</a>.
	</p>
</section>

<style>
	.topic-hub {
		margin-bottom: 1.25rem;
	}

	.topic-hub h2 {
		margin: 0 0 0.5rem;
		font-size: 1.25rem;
		color: var(--color-text);
	}

	.content-section {
		margin-bottom: 1.25rem;
	}

	.content-section h2 {
		margin: 0 0 0.85rem;
		font-size: 1.25rem;
		color: var(--color-text);
	}

	.section-text {
		margin: 0 0 0.75rem;
		max-width: 42rem;
		line-height: 1.6;
		color: var(--color-text);
	}

	.section-text:last-child {
		margin-bottom: 0;
	}

	.related-link {
		margin: 0.5rem 0 0;
	}

	.related-link a {
		font-weight: 650;
	}

	.section-intro {
		margin: 0 0 1rem;
		max-width: 42rem;
		line-height: 1.55;
	}

	.framework-link-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.85rem;
	}

	.framework-link-list li {
		padding: 0.85rem 1rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-surface-solid);
		box-shadow: var(--shadow-sm);
	}

	.framework-link-list a {
		display: block;
		font-weight: 700;
		color: var(--color-accent-strong);
		text-decoration: none;
		margin-bottom: 0.25rem;
	}

	.framework-link-list a:hover {
		text-decoration: underline;
	}

	.link-desc {
		display: block;
		font-size: 0.875rem;
		line-height: 1.45;
		color: var(--color-muted);
	}

	.next p {
		margin: 0;
		max-width: 42rem;
		line-height: 1.55;
		color: var(--color-muted);
	}

	.next a {
		font-weight: 650;
	}
</style>
