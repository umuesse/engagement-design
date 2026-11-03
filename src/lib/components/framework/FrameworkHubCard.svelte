<script lang="ts">
	import type { FrameworkGroup, FrameworkItem } from '#lib/data/frameworks';

	interface Props {
		group: FrameworkGroup;
	}

	let { group }: Props = $props();
</script>

<section class="hub-group glass-panel" style="--group-accent: {group.accent}">
	<header class="group-header">
		<h2>{group.title}</h2>
		<p>{group.description}</p>
	</header>

	{#if group.externalHref}
		<a class="external-link link-arrow" href={group.externalHref}>Anwendungsfelder entdecken →</a>
	{:else}
		<ul class="framework-list">
			{#each group.items as entry (entry.slug)}
				<li>
					<a
						href={entry.href}
						class="framework-link"
						class:published={entry.status === 'published'}
					>
						<span class="link-main">
							<span class="link-title">{entry.shortLabel}</span>
							<span class="link-summary">{entry.summary}</span>
						</span>
						<span
							class="status"
							class:live={entry.status === 'published'}
							aria-label={entry.status === 'published' ? 'Inhalt verfügbar' : 'In Vorbereitung'}
						>
							{entry.status === 'published' ? 'Live' : 'In Vorbereitung'}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.hub-group {
		padding: 1.15rem 1.2rem 1.2rem;
		margin-bottom: 0;
		border-top: 3px solid var(--group-accent);
	}

	.group-header h2 {
		margin: 0 0 0.4rem;
		font-size: 1.12rem;
	}

	.group-header p {
		margin: 0 0 1rem;
		font-size: 0.9rem;
		color: var(--color-muted);
		line-height: 1.5;
	}

	.framework-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.55rem;
	}

	.framework-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.75rem 0.85rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--color-border);
		background: var(--color-surface-solid);
		text-decoration: none;
		color: inherit;
		transition: transform var(--motion-fast), box-shadow var(--motion-fast), border-color var(--motion-fast);
	}

	.framework-link:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: color-mix(in srgb, var(--group-accent) 40%, var(--color-border));
		text-decoration: none;
	}

	.framework-link.published {
		border-color: color-mix(in srgb, var(--group-accent) 55%, var(--color-border));
		background: linear-gradient(
			135deg,
			color-mix(in srgb, var(--group-accent) 8%, white),
			var(--color-surface-solid)
		);
	}

	.link-main {
		display: grid;
		gap: 0.15rem;
		min-width: 0;
	}

	.link-title {
		font-weight: 700;
		font-size: 0.9375rem;
	}

	.link-summary {
		font-size: 0.8125rem;
		color: var(--color-muted);
		line-height: 1.4;
	}

	.status {
		flex-shrink: 0;
		font-size: 0.6875rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 0.25rem 0.45rem;
		border-radius: 999px;
		background: var(--color-surface-elevated);
		color: var(--color-muted);
	}

	.status.live {
		background: var(--group-accent);
		color: #fff;
	}

	.external-link {
		display: inline-flex;
		font-weight: 650;
	}
</style>
