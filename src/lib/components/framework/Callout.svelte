<script lang="ts">
	interface Props {
		title?: string;
		variant?: 'insight' | 'caution';
	}

	let { title, variant = 'insight', children }: Props & { children: import('svelte').Snippet } = $props();
</script>

<aside class="callout {variant}" role="note">
	{#if title}
		<p class="callout-title">{title}</p>
	{/if}
	<div class="callout-body">
		{@render children()}
	</div>
</aside>

<style>
	.callout {
		margin: 1.5rem 0;
		padding: 1rem 1.15rem;
		border-radius: var(--radius-md);
		border-left: 4px solid var(--color-accent);
		background: var(--color-accent-soft);
	}

	.callout.caution {
		border-left-color: #ea580c;
		background: rgba(234, 88, 12, 0.1);
	}

	.callout-title {
		margin: 0 0 0.45rem;
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.07em;
		color: var(--color-accent-strong);
	}

	.callout.caution .callout-title {
		color: #c2410c;
	}

	.callout-body {
		font-size: 0.975rem;
		line-height: 1.6;
		color: var(--color-text);
	}

	.callout-body :global(p) {
		margin: 0;
	}
</style>
