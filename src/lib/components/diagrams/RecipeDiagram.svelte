<svg viewBox="0 0 420 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	{#each [
		{ x: 35, l: 'R', w: 'Reflection' },
		{ x: 102, l: 'E', w: 'Exposition' },
		{ x: 169, l: 'C', w: 'Choice' },
		{ x: 236, l: 'I', w: 'Information' },
		{ x: 303, l: 'P', w: 'Play' },
		{ x: 370, l: 'E', w: 'Engage.' }
	] as item (item.w)}
		<circle cx={item.x} cy="55" r="26" fill="rgba(5,150,105,0.12)" stroke="#059669" stroke-width="2" />
		<text x={item.x} y="60" text-anchor="middle" class="diagram-title">{item.l}</text>
		<text x={item.x} y="105" text-anchor="middle" class="diagram-muted">{item.w}</text>
	{/each}
</svg>
