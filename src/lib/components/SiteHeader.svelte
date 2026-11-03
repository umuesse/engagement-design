<script lang="ts">
	import { page } from '$app/state';
	import { isNavActive, primaryNav } from '#lib/navigation';

	let menuOpen = $state(false);
	const navId = 'site-primary-nav';

	function closeMenu() {
		menuOpen = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="site-header">
	<div class="header-inner">
		<a class="brand" href="/" onclick={closeMenu}>
			<span class="brand-mark" aria-hidden="true">ED</span>
			<span class="brand-text">
				<span class="brand-title">Engagement Design</span>
				<span class="brand-sub">Bachelor-Modul</span>
			</span>
		</a>

		<button
			type="button"
			class="menu-toggle"
			aria-expanded={menuOpen}
			aria-controls={navId}
			onclick={toggleMenu}
		>
			<span class="sr-only">{menuOpen ? 'Menü schließen' : 'Menü öffnen'}</span>
			<span aria-hidden="true" class="menu-icon">{menuOpen ? '×' : '☰'}</span>
		</button>

		<nav id={navId} class="primary-nav" class:open={menuOpen} aria-label="Hauptnavigation">
			<ul>
				{#each primaryNav as item (item.href)}
					<li>
						<a
							href={item.href}
							class:active={isNavActive(page.url.pathname, item.href)}
							aria-current={isNavActive(page.url.pathname, item.href) ? 'page' : undefined}
							onclick={closeMenu}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.site-header {
		border-bottom: 1px solid var(--color-border);
		background: var(--color-surface);
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.header-inner {
		max-width: var(--layout-max);
		margin: 0 auto;
		padding: 0.75rem 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: inherit;
		min-width: 0;
	}

	.brand-mark {
		display: grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.5rem;
		background: var(--color-accent);
		color: var(--color-accent-contrast);
		font-weight: 700;
		font-size: 0.875rem;
		letter-spacing: 0.04em;
		flex-shrink: 0;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.brand-title {
		font-weight: 650;
		font-size: 1rem;
		line-height: 1.2;
	}

	.brand-sub {
		font-size: 0.75rem;
		color: var(--color-muted);
		line-height: 1.2;
	}

	.menu-toggle {
		display: none;
		border: 1px solid var(--color-border);
		background: var(--color-surface-elevated);
		border-radius: 0.375rem;
		padding: 0.35rem 0.65rem;
		font-size: 1.25rem;
		line-height: 1;
		cursor: pointer;
		color: inherit;
	}

	.primary-nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 0.5rem;
		justify-content: flex-end;
	}

	.primary-nav a {
		display: block;
		padding: 0.4rem 0.65rem;
		border-radius: 0.375rem;
		text-decoration: none;
		color: var(--color-text);
		font-size: 0.9375rem;
		font-weight: 500;
	}

	.primary-nav a:hover {
		background: var(--color-surface-elevated);
	}

	.primary-nav a.active {
		background: var(--color-accent-soft);
		color: var(--color-accent-strong);
	}

	@media (max-width: 52rem) {
		.menu-toggle {
			display: inline-flex;
			align-items: center;
		}

		.primary-nav {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			background: var(--color-surface);
			border-bottom: 1px solid var(--color-border);
			padding: 0.5rem 1.25rem 1rem;
			display: none;
		}

		.primary-nav.open {
			display: block;
		}

		.primary-nav ul {
			flex-direction: column;
			align-items: stretch;
		}

		.site-header {
			position: relative;
		}
	}
</style>
