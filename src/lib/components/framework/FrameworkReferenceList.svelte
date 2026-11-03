<script lang="ts">
	import type { FrameworkReference } from '#lib/data/frameworkContent/types';

	interface Props {
		references: FrameworkReference[];
		title?: string;
	}

	let { references, title = 'Literatur' }: Props = $props();
</script>

{#if references.length > 0}
	<section class="references glass-panel" aria-labelledby="references-title">
		<h2 id="references-title">{title}</h2>
		<ol class="reference-list">
			{#each references as ref (ref.id)}
				<li id="ref-{ref.id}" class="reference-item">
					<span class="reference-apa">{@html ref.apa}</span>
					{#if ref.href}
						<a
							class="reference-access"
							href={ref.href}
							rel="noopener noreferrer"
							target="_blank"
						>
							{ref.accessLabel ?? 'Volltext öffnen'}
						</a>
					{/if}
				</li>
			{/each}
		</ol>
	</section>
{/if}

<style>
	.references {
		margin-top: 2rem;
		padding: 1.15rem 1.2rem;
	}

	.references h2 {
		margin: 0 0 0.85rem;
		font-size: 1.05rem;
	}

	.reference-list {
		margin: 0;
		padding-left: 1.35rem;
		display: grid;
		gap: 0.85rem;
		font-size: 0.875rem;
		line-height: 1.55;
		color: var(--color-text);
	}

	.reference-item {
		padding-left: 0.15rem;
		scroll-margin-top: 1.25rem;
	}

	.reference-apa :global(em) {
		font-style: italic;
	}

	.reference-apa :global(a) {
		word-break: break-word;
	}

	.reference-access {
		display: inline-block;
		margin-top: 0.35rem;
		font-size: 0.8125rem;
		font-weight: 650;
	}
</style>
