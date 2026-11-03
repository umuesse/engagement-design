<script lang="ts">
	interface Props {
		title: string;
		lead: string;
		tag?: string;
	}

	let { title, lead, tag = 'Platzhalter' }: Props = $props();
</script>

<header class="page-intro">
	{#if tag}
		<p class="tag">{tag}</p>
	{/if}
	<h1>{title}</h1>
	<p class="lead">{lead}</p>
</header>

<style>
	.page-intro {
		margin-bottom: 2rem;
	}

	.tag {
		display: inline-block;
		margin: 0 0 0.75rem;
		padding: 0.2rem 0.55rem;
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		border-radius: 999px;
		background: var(--color-accent-soft);
		color: var(--color-accent-strong);
	}

	h1 {
		margin: 0 0 0.75rem;
		font-size: clamp(1.75rem, 4vw, 2.25rem);
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.lead {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.6;
		color: var(--color-muted);
		max-width: 42rem;
	}
</style>
