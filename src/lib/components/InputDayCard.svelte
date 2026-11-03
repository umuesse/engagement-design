<script lang="ts">
	import type { InputDay } from '#lib/data/inputphase';

	interface Props {
		day: InputDay;
		isLast?: boolean;
	}

	let { day, isLast = false }: Props = $props();
</script>

<article class="day-card" style="--day-accent: {day.accent}">
	<div class="timeline-marker" aria-hidden="true">
		<span class="dot"></span>
		{#if !isLast}
			<span class="line"></span>
		{/if}
	</div>

	<div class="day-body">
		<header class="day-header">
			<p class="day-label">Tag {day.day}</p>
			<h2>{day.theme}</h2>
		</header>

		<div class="objectives">
			<h3>Lernziele</h3>
			<ul>
				{#each day.objectives as objective (objective)}
					<li>{objective}</li>
				{/each}
			</ul>
		</div>

		{#if day.frameworkHint}
			<p class="hint">
				{#if day.day === 5}
					Weiter zur <a href={day.frameworkHint}>Projektphase</a> — oder
					<a href="/frameworks">Frameworks</a> vertiefen.
				{:else}
					Vertiefung: <a href={day.frameworkHint}>Frameworks-Übersicht</a>
				{/if}
			</p>
		{/if}
	</div>
</article>

<style>
	.day-card {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem 1.25rem;
		margin-bottom: 0.5rem;
	}

	.timeline-marker {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 0.35rem;
	}

	.dot {
		width: 0.85rem;
		height: 0.85rem;
		border-radius: 50%;
		background: var(--day-accent);
		box-shadow: 0 0 0 4px color-mix(in srgb, var(--day-accent) 22%, transparent);
		flex-shrink: 0;
	}

	.line {
		width: 2px;
		flex: 1;
		min-height: 2rem;
		margin-top: 0.35rem;
		background: linear-gradient(to bottom, var(--day-accent), transparent);
		opacity: 0.45;
	}

	.day-body {
		background: var(--color-surface-solid);
		border: 1px solid var(--color-border);
		border-left: 4px solid var(--day-accent);
		border-radius: var(--radius-md);
		padding: 1.15rem 1.25rem 1.25rem;
		box-shadow: var(--shadow-md);
		transition: transform var(--motion-fast), box-shadow var(--motion-fast);
	}

	.day-body:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
	}

	.day-header {
		margin-bottom: 1rem;
	}

	.day-label {
		margin: 0 0 0.35rem;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--day-accent);
	}

	h2 {
		margin: 0;
		font-size: clamp(1.05rem, 2.5vw, 1.25rem);
		line-height: 1.35;
	}

	.objectives h3 {
		margin: 0 0 0.5rem;
		font-size: 0.8125rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-muted);
	}

	ul {
		margin: 0;
		padding-left: 1.15rem;
		display: grid;
		gap: 0.45rem;
		font-size: 0.9375rem;
		line-height: 1.5;
	}

	.hint {
		margin: 1rem 0 0;
		font-size: 0.875rem;
		color: var(--color-muted);
	}

	@media (max-width: 40rem) {
		.day-card {
			grid-template-columns: 1fr;
		}

		.timeline-marker {
			flex-direction: row;
			gap: 0.5rem;
			padding-top: 0;
		}

		.line {
			width: auto;
			height: 2px;
			flex: 1;
			min-height: 0;
			margin-top: 0;
			background: linear-gradient(to right, var(--day-accent), transparent);
		}
	}
</style>
