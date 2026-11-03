<script lang="ts">
	import type { MethodItem } from '#lib/data/methods';

	interface Props {
		items: MethodItem[];
	}

	let { items }: Props = $props();
</script>

<ul class="method-list">
	{#each items as entry (entry.slug)}
		<li>
			<a href={entry.href} class="method-link" class:published={entry.status === 'published'}>
				<span class="link-main">
					<span class="link-tag">{entry.tag}</span>
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

<style>
	.method-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.65rem;
	}

	.method-link {
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

	.method-link:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: color-mix(in srgb, #059669 40%, var(--color-border));
		text-decoration: none;
	}

	.method-link.published {
		border-color: color-mix(in srgb, #059669 55%, var(--color-border));
		background: linear-gradient(
			135deg,
			color-mix(in srgb, #059669 8%, white),
			var(--color-surface-solid)
		);
	}

	.link-main {
		display: grid;
		gap: 0.2rem;
		min-width: 0;
	}

	.link-tag {
		font-size: 0.6875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-muted);
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
		background: #059669;
		color: #fff;
	}
</style>
