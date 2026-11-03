<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	<ellipse cx="210" cy="60" rx="165" ry="42" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="8 5" />
	{#each [
		{ x: 60, t: 'Verstehen' },
		{ x: 150, t: 'Ideate' },
		{ x: 270, t: 'Prototyp' },
		{ x: 360, t: 'Testen' }
	] as step, i (step.t)}
		<circle cx={step.x} cy="60" r="32" fill="rgba(5,150,105,0.12)" stroke="#059669" stroke-width="2" />
		<text x={step.x} y="65" text-anchor="middle" class="diagram-label">{step.t}</text>
		{#if i < 3}
			<polygon
				points="{step.x + 38},60 {step.x + 48},55 {step.x + 48},65"
				fill="#059669"
				aria-hidden="true"
			/>
		{/if}
	{/each}
</svg>
