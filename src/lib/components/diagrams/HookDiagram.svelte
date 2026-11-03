<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	{#each [
		{ x: 55, t: 'Trigger' },
		{ x: 155, t: 'Action' },
		{ x: 265, t: 'Variable Reward' },
		{ x: 365, t: 'Investment' }
	] as step, i (step.t)}
		<rect x={step.x - 45} y="45" width="90" height="44" rx="8" fill="rgba(255,255,255,0.9)" stroke="#7c3aed" stroke-width="1.5" />
		<text x={step.x} y="72" text-anchor="middle" class="diagram-label">{step.t}</text>
		{#if i < 3}
			<line x1={step.x + 45} y1="67" x2={step.x + 55} y2="67" stroke="#7c3aed" stroke-width="2" />
			<polygon points="{step.x + 55},67 {step.x + 48},63 {step.x + 48},71" fill="#7c3aed" />
		{/if}
	{/each}
	<path d="M 365 89 Q 400 110 210 120 Q 20 110 55 89" fill="none" stroke="var(--color-muted)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6" />
</svg>
