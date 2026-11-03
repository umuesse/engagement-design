<script lang="ts">
	import type { ApplicationField } from '#lib/data/anwendungsfelder';

	interface Props {
		field: ApplicationField;
	}

	let { field }: Props = $props();
</script>

<article class="field-card glass-panel" style="--field-accent: {field.accent}">
	<header>
		<p class="field-kicker">{field.subtitle}</p>
		<h2>{field.title}</h2>
	</header>

	<p class="description">{field.description}</p>

	<div class="example">
		<h3>Beispielprojekt-Idee</h3>
		<p>{field.exampleProject}</p>
	</div>

	<div class="frameworks">
		<h3>Framework-Hinweise</h3>
		<ul>
			{#each field.frameworkHints as hint (hint.href)}
				<li><a href={hint.href}>{hint.label}</a></li>
			{/each}
		</ul>
	</div>
</article>

<style>
	.field-card {
		margin-bottom: 0;
		padding: 1.15rem 1.2rem 1.25rem;
		border-top: 3px solid var(--field-accent);
		transition: transform var(--motion-fast), box-shadow var(--motion-fast);
	}

	.field-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
	}

	.field-kicker {
		margin: 0 0 0.25rem;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.07em;
		color: var(--field-accent);
	}

	h2 {
		margin: 0 0 0.75rem;
		font-size: 1.15rem;
	}

	.description {
		margin: 0 0 1rem;
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-muted);
	}

	.example,
	.frameworks {
		margin-top: 0.85rem;
		padding-top: 0.85rem;
		border-top: 1px dashed var(--color-border);
	}

	h3 {
		margin: 0 0 0.45rem;
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-text);
	}

	.example p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.55;
	}

	.frameworks ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.frameworks a {
		display: inline-block;
		padding: 0.28rem 0.55rem;
		border-radius: 999px;
		font-size: 0.8125rem;
		font-weight: 600;
		text-decoration: none;
		background: color-mix(in srgb, var(--field-accent) 12%, white);
		border: 1px solid color-mix(in srgb, var(--field-accent) 28%, var(--color-border));
	}

	.frameworks a:hover {
		background: color-mix(in srgb, var(--field-accent) 22%, white);
		text-decoration: none;
	}
</style>
