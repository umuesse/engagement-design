<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	{#each [
		{ x: 70, y: 45, n: 'Philanthropist' },
		{ x: 210, y: 45, n: 'Socialiser' },
		{ x: 350, y: 45, n: 'Free Spirit' },
		{ x: 70, y: 115, n: 'Achiever' },
		{ x: 210, y: 115, n: 'Player' },
		{ x: 350, y: 115, n: 'Disruptor' }
	] as cell (cell.n)}
		<rect x={cell.x - 55} y={cell.y - 22} width="110" height="44" rx="22" fill="rgba(255,255,255,0.85)" stroke="#0891b2" stroke-width="1.5" />
		<text x={cell.x} y={cell.y + 4} text-anchor="middle" class="diagram-label">{cell.n}</text>
	{/each}
</svg>
