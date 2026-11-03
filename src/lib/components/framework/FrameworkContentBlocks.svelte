<script lang="ts">
	import Callout from '#lib/components/framework/Callout.svelte';
	import type { ContentBlock } from '#lib/data/frameworkContent/types';

	interface Props {
		blocks: ContentBlock[];
	}

	let { blocks }: Props = $props();
</script>

{#each blocks as block, index (index)}
	{#if block.type === 'h2'}
		<h2>{block.text}</h2>
	{:else if block.type === 'p'}
		<p>{@html block.text}</p>
	{:else if block.type === 'ul'}
		<ul>
			{#each block.items as item (item)}
				<li>{@html item}</li>
			{/each}
		</ul>
	{:else if block.type === 'table'}
		<figure class="content-table">
			{#if block.caption}
				<figcaption>{block.caption}</figcaption>
			{/if}
			<div class="content-table-scroll">
				<table>
					<thead>
						<tr>
							{#each block.headers as header, hi (hi)}
								<th scope="col">{@html header}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each block.rows as row, ri (ri)}
							<tr>
								{#each row as cell, ci (ci)}
									{#if ci === 0}
										<th scope="row">{@html cell}</th>
									{:else}
										<td>{@html cell}</td>
									{/if}
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</figure>
	{:else if block.type === 'callout'}
		<Callout title={block.title} variant={block.variant ?? 'insight'}>
			{#each block.paragraphs as paragraph (paragraph)}
				<p>{paragraph}</p>
			{/each}
		</Callout>
	{/if}
{/each}

<style>
	h2 {
		margin: 2rem 0 0.75rem;
		font-size: 1.25rem;
	}

	h2:first-child {
		margin-top: 0;
	}

	p {
		font-size: 1rem;
		line-height: 1.65;
	}

	ul {
		padding-left: 1.2rem;
		display: grid;
		gap: 0.45rem;
		font-size: 1rem;
		line-height: 1.6;
	}

	.content-table {
		margin: 1.25rem 0;
	}

	.content-table figcaption {
		margin: 0 0 0.5rem;
		font-size: 0.875rem;
		color: var(--color-muted);
		text-align: left;
	}

	.content-table-scroll {
		overflow-x: auto;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-surface-solid);
	}

	.content-table table {
		width: 100%;
		min-width: 28rem;
		border-collapse: collapse;
		font-size: 0.9375rem;
		line-height: 1.5;
	}

	.content-table th[scope='row'] {
		font-weight: 650;
		background: transparent;
	}

	.content-table th,
	.content-table td {
		padding: 0.65rem 0.75rem;
		text-align: left;
		vertical-align: top;
		border-bottom: 1px solid var(--color-border);
	}

	.content-table th {
		font-weight: 650;
		background: var(--color-accent-soft);
		color: var(--color-text);
	}

	.content-table tbody tr:last-child td {
		border-bottom: none;
	}
</style>
