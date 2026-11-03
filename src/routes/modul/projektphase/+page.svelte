<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import { deliverables, projectSteps } from '#lib/data/projektphase';
</script>

<svelte:head>
	<title>Projektphase — Engagement Design</title>
	<meta
		name="description"
		content="Eigenständiges Engagement-Design-Projekt: Ablauf, Deliverables (Platzhalter) und Verknüpfung mit Inputphase, Frameworks und Ethik."
	/>
</svelte:head>

<PageIntro
	tag="Projektphase · Eigenständig"
	title="Dein Engagement-Design-Projekt"
	lead="Nach der Inputphase setzt du Theorie in die Praxis um: ein eigenständiges Projekt mit Frameworks, Prototyp oder Simulation — und einer klaren ethischen Reflexion."
/>

<section class="glass-panel" aria-labelledby="flow-title">
	<h2 id="flow-title">Ablauf</h2>
	<ol class="step-list">
		{#each projectSteps as step, index (step.title)}
			<li>
				<span class="step-num" aria-hidden="true">{index + 1}</span>
				<div>
					<h3>{step.title}</h3>
					<p>{step.detail}</p>
				</div>
			</li>
		{/each}
	</ol>
</section>

<section class="glass-panel" aria-labelledby="deliverables-title">
	<h2 id="deliverables-title">Mögliche Deliverables</h2>
	<p class="note text-muted">
		<strong>Hinweis:</strong> Umfang und Gewichtung werden angepasst, sobald die Prüfungsform im Modul
		final geklärt ist. Die Liste unten ist eine Orientierung — keine verbindliche Vorgabe.
	</p>
	<ul class="deliverable-list">
		{#each deliverables as item (item.title)}
			<li>
				<h3>
					{item.title}
					{#if item.status === 'placeholder'}
						<span class="badge">Platzhalter</span>
					{/if}
				</h3>
				<p>{item.description}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="glass-panel links" aria-labelledby="links-title">
	<h2 id="links-title">Was du dafür brauchst</h2>
	<ul class="resource-links">
		<li>
			<a href="/modul/inputphase">Inputphase</a> — Lernziele und Tagesplan (Tag 1–5)
		</li>
		<li>
			<a href="/frameworks">Framework-Hub</a> — z. B.
			<a href="/frameworks/sdt">SDT</a> für Motivation
		</li>
		<li>
			<a href="/anwendungsfelder">Anwendungsfelder</a> — Themen und Beispielprojekte
		</li>
		<li>
			Ethik &amp; Dark Patterns —
			<a href="/frameworks/dark-patterns">Vertiefung (bald)</a>; bereits in der
			<a href="/modul/inputphase">Inputphase Tag 4</a>
		</li>
	</ul>
</section>

<style>
	.glass-panel {
		margin-bottom: 1.15rem;
	}

	.glass-panel h2 {
		margin: 0 0 1rem;
		font-size: 1.2rem;
	}

	.step-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 1rem;
	}

	.step-list li {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.85rem 1rem;
		align-items: start;
		padding-bottom: 1rem;
		border-bottom: 1px dashed var(--color-border);
	}

	.step-list li:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}

	.step-num {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 999px;
		background: var(--gradient-brand);
		color: #fff;
		font-weight: 800;
		font-size: 0.875rem;
		flex-shrink: 0;
	}

	.step-list h3 {
		margin: 0 0 0.35rem;
		font-size: 1rem;
	}

	.step-list p {
		margin: 0;
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-muted);
	}

	.note {
		margin: 0 0 1rem;
		font-size: 0.9375rem;
		line-height: 1.55;
		max-width: 44rem;
	}

	.deliverable-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.85rem;
	}

	.deliverable-list h3 {
		margin: 0 0 0.35rem;
		font-size: 0.975rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}

	.deliverable-list p {
		margin: 0;
		font-size: 0.9375rem;
		color: var(--color-muted);
		line-height: 1.5;
	}

	.badge {
		font-size: 0.65rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 0.2rem 0.45rem;
		border-radius: 999px;
		background: rgba(234, 88, 12, 0.12);
		color: #c2410c;
	}

	.resource-links {
		margin: 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.5rem;
		line-height: 1.55;
		font-weight: 500;
	}
</style>
