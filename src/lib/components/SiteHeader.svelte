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
				<span class="brand-sub">Für Studierende · Bachelor &amp; Master</span>
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
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(14px);
		position: sticky;
		top: 0;
		z-index: 20;
	}

	.header-inner {
		max-width: var(--layout-max);
		margin: 0 auto;
		padding: 0.85rem 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		position: relative;
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
		width: 2.65rem;
		height: 2.65rem;
		border-radius: 0.75rem;
		background: var(--gradient-brand);
		color: #fff;
		font-weight: 800;
		font-size: 0.875rem;
		letter-spacing: 0.04em;
		flex-shrink: 0;
		box-shadow: var(--shadow-md);
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.brand-title {
		font-weight: 800;
		font-size: 1rem;
		line-height: 1.2;
	}

	.brand-sub {
		font-size: 0.72rem;
		color: var(--color-muted);
		line-height: 1.2;
		font-weight: 500;
	}

	.menu-toggle {
		display: none;
		border: 1px solid var(--color-border);
		background: var(--color-surface-solid);
		border-radius: var(--radius-sm);
		padding: 0.4rem 0.7rem;
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
		gap: 0.25rem 0.35rem;
		justify-content: flex-end;
	}

	.primary-nav a {
		display: block;
		padding: 0.45rem 0.7rem;
		border-radius: 999px;
		text-decoration: none;
		color: var(--color-text);
		font-size: 0.875rem;
		font-weight: 600;
		transition: background var(--motion-fast), color var(--motion-fast);
	}

	.primary-nav a:hover {
		background: var(--color-accent-soft);
		color: var(--color-accent-strong);
	}

	.primary-nav a.active {
		background: var(--color-accent-strong);
		color: #fff;
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
			background: rgba(255, 255, 255, 0.96);
			backdrop-filter: blur(12px);
			border-bottom: 1px solid var(--color-border);
			padding: 0.65rem 1.25rem 1rem;
			display: none;
			box-shadow: var(--shadow-md);
		}

		.primary-nav.open {
			display: block;
		}

		.primary-nav ul {
			flex-direction: column;
			align-items: stretch;
		}

		.site-header {
			position: sticky;
		}
	}
</style>
