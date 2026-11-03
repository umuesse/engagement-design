<script lang="ts">
	interface Props {
		title: string;
		lead: string;
		tag?: string;
	}

	let { title, lead, tag }: Props = $props();
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
		padding-bottom: 0.25rem;
	}

	.tag {
		display: inline-block;
		margin: 0 0 0.85rem;
		padding: 0.28rem 0.65rem;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		border-radius: 999px;
		background: var(--color-accent-soft);
		color: var(--color-accent-strong);
		border: 1px solid rgba(124, 58, 237, 0.15);
	}

	h1 {
		margin: 0 0 0.85rem;
		font-size: clamp(1.85rem, 4.5vw, 2.65rem);
		line-height: 1.1;
		background: var(--gradient-brand);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	.lead {
		margin: 0;
		font-size: 1.0625rem;
		line-height: 1.65;
		color: var(--color-muted);
		max-width: 44rem;
	}
</style>
