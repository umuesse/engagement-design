<svg
	viewBox="0 0 720 194"
	width="100%"
	preserveAspectRatio="xMidYMid meet"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<defs>
		<linearGradient id="sdt-cont-axis-h" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" stop-color="#64748b" />
			<stop offset="100%" stop-color="#5b21b6" />
		</linearGradient>
	</defs>

	<text x="20" y="28" class="diagram-muted">Nicht selbstbestimmt ←</text>
	<text x="700" y="28" text-anchor="end" class="diagram-muted">→ Selbstbestimmt</text>

	<path
		d="M 118 58 L 118 46 L 598 46 L 598 58"
		fill="none"
		stroke="var(--diagram-segment-border)"
		stroke-width="1.5"
	/>
	<text x="358" y="40" text-anchor="middle" class="diagram-label">Extrinsische Motivation</text>

	<rect x="20" y="62" width="88" height="24" rx="6" class="diagram-segment diagram-segment-amotivation" />
	<rect x="118" y="62" width="115" height="24" class="diagram-segment diagram-segment-external" />
	<rect x="233" y="62" width="115" height="24" class="diagram-segment diagram-segment-introjected" />
	<rect x="348" y="62" width="115" height="24" class="diagram-segment diagram-segment-identified" />
	<rect x="463" y="62" width="115" height="24" class="diagram-segment diagram-segment-integrated" />
	<rect x="568" y="62" width="132" height="24" rx="6" class="diagram-segment diagram-segment-intrinsic" />

	{#each [
		{ cx: 64, title: ['Amotivation'], desc: ['Keine klare', 'motivationale Ausrichtung'] },
		{ cx: 175, title: ['Externe', 'Regulierung'], desc: ['Belohnung oder Druck', 'von außen'] },
		{ cx: 290, title: ['Introjizierte', 'Regulierung'], desc: ['Stolz, Schuld,', 'innerer Druck'] },
		{ cx: 405, title: ['Identifizierte', 'Regulierung'], desc: ['Bewusst wichtige', 'persönliche Werte'] },
		{ cx: 520, title: ['Integrierte', 'Regulierung'], desc: ['Mit dem Selbst', 'verbunden'] },
		{
			cx: 634,
			title: ['Intrinsische', 'Motivation'],
			desc: ['Interesse und Befriedigung', 'in der Tätigkeit selbst']
		}
	] as col (col.cx)}
		<text x={col.cx} y="108" text-anchor="middle" class="diagram-label">
			{#each col.title as line, i (line)}
				<tspan x={col.cx} dy={i === 0 ? 0 : 14}>{line}</tspan>
			{/each}
		</text>
		<text x={col.cx} y="148" text-anchor="middle" class="diagram-desc">
			{#each col.desc as line, i (line)}
				<tspan x={col.cx} dy={i === 0 ? 0 : 13}>{line}</tspan>
			{/each}
		</text>
	{/each}

	<line x1="32" y1="188" x2="688" y2="188" stroke="url(#sdt-cont-axis-h)" stroke-width="3.5" stroke-linecap="round" />
	<polygon points="688,188 678,183 678,193" fill="#5b21b6" />
</svg>

