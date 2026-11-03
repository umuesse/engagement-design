<div class="sdt-spectrum-wrap">
	<!-- Horizontal: ab ~641px -->
	<svg
		class="layout-horizontal"
		viewBox="0 0 720 368"
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

		<text x="360" y="26" text-anchor="middle" class="diagram-title">Kontinuum der Selbstbestimmung (SDT)</text>
		<text x="20" y="48" class="diagram-muted">Nicht selbstbestimmt ←</text>
		<text x="700" y="48" text-anchor="end" class="diagram-muted">→ Selbstbestimmt</text>

		<path
			d="M 118 78 L 118 66 L 598 66 L 598 78"
			fill="none"
			stroke="var(--diagram-segment-border)"
			stroke-width="1.5"
		/>
		<text x="358" y="60" text-anchor="middle" class="diagram-label">Extrinsische Motivation</text>

		<rect x="20" y="82" width="88" height="24" rx="6" class="diagram-segment diagram-segment-amotivation" />
		<rect x="118" y="82" width="115" height="24" class="diagram-segment diagram-segment-external" />
		<rect x="233" y="82" width="115" height="24" class="diagram-segment diagram-segment-introjected" />
		<rect x="348" y="82" width="115" height="24" class="diagram-segment diagram-segment-identified" />
		<rect x="463" y="82" width="115" height="24" class="diagram-segment diagram-segment-integrated" />
		<rect x="568" y="82" width="132" height="24" rx="6" class="diagram-segment diagram-segment-intrinsic" />

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
			<text x={col.cx} y="128" text-anchor="middle" class="diagram-label">
				{#each col.title as line, i (line)}
					<tspan x={col.cx} dy={i === 0 ? 0 : 14}>{line}</tspan>
				{/each}
			</text>
			<text x={col.cx} y="168" text-anchor="middle" class="diagram-desc">
				{#each col.desc as line, i (line)}
					<tspan x={col.cx} dy={i === 0 ? 0 : 13}>{line}</tspan>
				{/each}
			</text>
		{/each}

		<line x1="32" y1="318" x2="688" y2="318" stroke="url(#sdt-cont-axis-h)" stroke-width="3.5" stroke-linecap="round" />
		<polygon points="688,318 678,313 678,323" fill="#5b21b6" />
		<text x="360" y="342" text-anchor="middle" class="diagram-muted">Steigende Autonomie und Internalisierung →</text>
		<text x="360" y="358" text-anchor="middle" class="diagram-muted">(nach Ryan &amp; Deci, 2000)</text>
	</svg>

	<!-- Vertikal: schmale Viewports -->
	<svg
		class="layout-vertical"
		viewBox="0 0 340 700"
		width="100%"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<defs>
			<linearGradient id="sdt-cont-axis-v" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stop-color="#64748b" />
				<stop offset="100%" stop-color="#5b21b6" />
			</linearGradient>
		</defs>

		<text x="170" y="26" text-anchor="middle" class="diagram-title">Kontinuum der Selbstbestimmung (SDT)</text>
		<text x="170" y="48" text-anchor="middle" class="diagram-muted">Oben: weniger selbstbestimmt · Unten: mehr</text>

		{#each [
			{ y: 68, seg: 'diagram-segment-amotivation', title: 'Amotivation', desc: 'Keine klare motivationale Ausrichtung', inExtrinsic: false },
			{
				y: 168,
				seg: 'diagram-segment-external',
				title: 'Externe Regulierung',
				desc: 'Belohnung oder Druck von außen',
				inExtrinsic: true
			},
			{
				y: 268,
				seg: 'diagram-segment-introjected',
				title: 'Introjizierte Regulierung',
				desc: 'Stolz, Schuld, innerer Druck',
				inExtrinsic: true
			},
			{
				y: 368,
				seg: 'diagram-segment-identified',
				title: 'Identifizierte Regulierung',
				desc: 'Bewusst wichtige persönliche Werte',
				inExtrinsic: true
			},
			{
				y: 468,
				seg: 'diagram-segment-integrated',
				title: 'Integrierte Regulierung',
				desc: 'Mit dem Selbst verbunden',
				inExtrinsic: true
			},
			{
				y: 568,
				seg: 'diagram-segment-intrinsic',
				title: 'Intrinsische Motivation',
				desc: 'Interesse und Befriedigung in der Tätigkeit selbst',
				inExtrinsic: false
			}
		] as stage (stage.y)}
			<rect x="24" y={stage.y} width="292" height="22" rx="6" class="diagram-segment {stage.seg}" />
			<text x="170" y={stage.y + 48} text-anchor="middle" class="diagram-label">{stage.title}</text>
			<text x="170" y={stage.y + 68} text-anchor="middle" class="diagram-desc">{stage.desc}</text>
		{/each}

		<rect x="12" y="162" width="316" height="396" rx="8" fill="none" stroke="var(--diagram-segment-border)" stroke-width="1.5" stroke-dasharray="4 3" />
		<text x="32" y="156" class="diagram-label">Extrinsische Motivation</text>

		<line x1="308" y1="92" x2="308" y2="598" stroke="url(#sdt-cont-axis-v)" stroke-width="3.5" stroke-linecap="round" />
		<polygon points="308,598 303,588 313,588" fill="#5b21b6" />
		<text x="170" y="638" text-anchor="middle" class="diagram-muted">Steigende Autonomie und Internalisierung ↓</text>
		<text x="170" y="656" text-anchor="middle" class="diagram-muted">(nach Ryan &amp; Deci, 2000)</text>
	</svg>
</div>

<style>
	.sdt-spectrum-wrap {
		width: 100%;
		min-height: 0;
	}

	.sdt-spectrum-wrap :global(svg) {
		display: block;
		width: 100%;
		height: auto;
		max-width: 45rem;
		margin: 0 auto;
	}

	.layout-horizontal {
		min-width: 36rem;
	}

	.layout-vertical {
		display: none;
		max-width: 22rem;
	}

	@media (max-width: 640px) {
		.layout-horizontal {
			display: none;
		}

		.layout-vertical {
			display: block;
		}
	}
</style>
