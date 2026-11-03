<script lang="ts">
	import { page } from '$app/state';
	import { isNavActive, modulNav } from '#lib/navigation';

	const current = $derived(modulNav.find((item) => isNavActive(page.url.pathname, item.href)));
</script>

<nav class="modul-subnav" aria-label="Modulbereich">
	<ol class="breadcrumb">
		<li><a href="/">Start</a></li>
		<li aria-hidden="true">/</li>
		<li><span>Modul</span></li>
		{#if current}
			<li aria-hidden="true">/</li>
			<li><span aria-current="page">{current.label}</span></li>
		{/if}
	</ol>

	<div class="phase-tabs">
		{#each modulNav as item (item.href)}
			<a
				href={item.href}
				class="phase-tab"
				class:active={isNavActive(page.url.pathname, item.href)}
				aria-current={isNavActive(page.url.pathname, item.href) ? 'page' : undefined}
			>
				<span class="tab-label">{item.label}</span>
				{#if item.description}
					<span class="tab-desc">{item.description}</span>
				{/if}
			</a>
		{/each}
	</div>
</nav>

<style>
	.modul-subnav {
		margin-bottom: 2rem;
		display: grid;
		gap: 1rem;
	}

	.breadcrumb {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.8125rem;
		color: var(--color-muted);
	}

	.breadcrumb a {
		text-decoration: none;
		font-weight: 600;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.breadcrumb span[aria-current='page'] {
		color: var(--color-text);
		font-weight: 650;
	}

	.phase-tabs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
		gap: 0.65rem;
	}

	.phase-tab {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 0.85rem 1rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-surface-solid);
		text-decoration: none;
		color: inherit;
		box-shadow: var(--shadow-sm);
		transition: transform var(--motion-fast), box-shadow var(--motion-fast), border-color var(--motion-fast);
	}

	.phase-tab:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		border-color: rgba(124, 58, 237, 0.35);
		text-decoration: none;
	}

	.phase-tab.active {
		border-color: transparent;
		background: var(--gradient-brand);
		color: #fff;
		box-shadow: var(--shadow-lg);
	}

	.tab-label {
		font-weight: 700;
		font-size: 0.9375rem;
	}

	.tab-desc {
		font-size: 0.75rem;
		opacity: 0.88;
	}

	.phase-tab:not(.active) .tab-desc {
		color: var(--color-muted);
	}
</style>
