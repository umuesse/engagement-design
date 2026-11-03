<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import SiteFooter from '#lib/components/SiteFooter.svelte';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import '#lib/styles/global.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="Engagement Design — Lern- und Orientierungshilfe für Studierende: von Gamification zu menschenzentrierter Gestaltung."
	/>
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
	.skip-link {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 100;
		padding: 0.5rem 1rem;
		background: var(--color-accent-strong);
		color: #fff;
		text-decoration: none;
		border-radius: 0 0 var(--radius-sm) 0;
		font-weight: 600;
	}

	.skip-link:focus {
		left: 0.75rem;
		top: 0.75rem;
	}

	.app-shell {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
		padding: 2rem 0 3.5rem;
	}

	.content-wrap {
		max-width: var(--layout-max);
		margin: 0 auto;
		padding: 0 1.25rem;
	}
</style>
