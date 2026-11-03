<script lang="ts">
	import type { GamificationTopicItem } from '#lib/data/gamificationSection';

	interface Props {
		items: GamificationTopicItem[];
	}

	let { items }: Props = $props();
</script>

<ul class="topic-list">
	{#each items as entry (entry.slug)}
		<li>
			<a href={entry.href} class="topic-link" class:published={entry.status === 'published'}>
				<span class="link-main">
					<span class="link-title">{entry.title}</span>
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

<style>
	.topic-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.65rem;
	}

	.topic-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.85rem 1rem;
		border-radius: var(--radius-sm);
		border: 1px solid var(--color-border);
		background: var(--color-surface-solid);
		text-decoration: none;
		color: inherit;
		transition: transform var(--motion-fast), box-shadow var(--motion-fast), border-color var(--motion-fast);
	}

	.topic-link:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: color-mix(in srgb, #0891b2 45%, var(--color-border));
		text-decoration: none;
	}

	.topic-link.published {
		border-color: color-mix(in srgb, #0891b2 55%, var(--color-border));
		background: linear-gradient(
			135deg,
			color-mix(in srgb, #0891b2 8%, white),
			var(--color-surface-solid)
		);
	}

	.link-main {
		display: grid;
		gap: 0.25rem;
		min-width: 0;
	}

	.link-title {
		font-weight: 700;
		font-size: 0.975rem;
		color: var(--color-accent-strong);
	}

	.link-summary {
		font-size: 0.8125rem;
		color: var(--color-muted);
		line-height: 1.45;
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
		background: #0891b2;
		color: #fff;
	}
</style>
