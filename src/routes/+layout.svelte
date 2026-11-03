<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Engagement Design — Bachelor-Modul: von Gamification zu menschenzentrierter Gestaltung von Erfahrungen." />
</svelte:head>

<a class="skip-link" href="#main-content">Zum Inhalt springen</a>

<div class="app-shell">
	<SiteHeader />
	<main id="main-content" class="main-content">
		<div class="content-wrap">
			{@render children()}
		</div>
	</main>
	<SiteFooter />
</div>

<style>
	:global(:root) {
		--color-bg: #f6f4f0;
		--color-surface: #fffdf9;
		--color-surface-elevated: #f0ebe3;
		--color-text: #1c1917;
		--color-muted: #57534e;
		--color-border: #d6d0c7;
		--color-accent: #0f766e;
		--color-accent-strong: #115e59;
		--color-accent-soft: #ccfbf1;
		--color-accent-contrast: #f0fdfa;
		--layout-max: 72rem;
		--font-sans: 'Segoe UI', system-ui, -apple-system, sans-serif;
		--font-serif: 'Iowan Old Style', 'Palatino Linotype', Palatino, Georgia, serif;
	}

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(html) {
		font-size: 100%;
	}

	:global(body) {
		margin: 0;
		font-family: var(--font-sans);
		line-height: 1.55;
		color: var(--color-text);
		background: var(--color-bg);
		text-rendering: optimizeLegibility;
	}

	:global(h1, h2, h3) {
		font-family: var(--font-serif);
		font-weight: 650;
	}

	:global(a) {
		color: var(--color-accent-strong);
	}

	:global(a:hover) {
		color: var(--color-accent);
	}

	:global(.sr-only) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.skip-link {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 100;
		padding: 0.5rem 1rem;
		background: var(--color-accent);
		color: var(--color-accent-contrast);
		text-decoration: none;
		border-radius: 0 0 0.25rem 0;
	}

	.skip-link:focus {
		left: 0.5rem;
		top: 0.5rem;
	}

	.app-shell {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
		padding: 2rem 0 3rem;
	}

	.content-wrap {
		max-width: var(--layout-max);
		margin: 0 auto;
		padding: 0 1.25rem;
	}
</style>
