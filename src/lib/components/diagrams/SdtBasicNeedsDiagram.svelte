<svg
	viewBox="0 0 408 132"
	width="100%"
	preserveAspectRatio="xMidYMid meet"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<!-- Verbindung oben (Baum) -->
	<path
		d="M 70 14 L 338 14 M 70 14 L 70 28 M 204 14 L 204 28 M 338 14 L 338 28"
		fill="none"
		stroke="var(--diagram-segment-border)"
		stroke-width="2"
		stroke-linecap="round"
	/>

	{#each [
		{
			x: 16,
			title: 'Kompetenz',
			desc: ['Wirksam sein im Umgang', 'mit der Umwelt'],
			headerFill: 'var(--diagram-segment-intrinsic)',
			bodyFill: 'var(--diagram-segment-identified)'
		},
		{
			x: 144,
			title: 'Autonomie',
			desc: ['Selbstbestimmung über den', 'eigenen Lebensweg'],
			headerFill: '#433855',
			bodyFill: 'var(--diagram-segment-introjected)'
		},
		{
			x: 272,
			title: 'Eingebundenheit',
			desc: ['Nahe, vertrauensvolle', 'Beziehungen zu anderen'],
			headerFill: 'var(--color-accent-alt)',
			bodyFill: 'var(--diagram-segment-integrated)'
		}
	] as col (col.title)}
		<g transform="translate({col.x}, 28)">
			<rect x="0" y="0" width="120" height="30" rx="8" fill={col.headerFill} stroke="var(--diagram-segment-border)" stroke-width="1.5" />
			<text x="60" y="20" text-anchor="middle" class="diagram-label-on-dark">{col.title}</text>
			<rect
				x="0"
				y="30"
				width="120"
				height="74"
				rx="8"
				fill={col.bodyFill}
				stroke="var(--diagram-segment-border)"
				stroke-width="1.5"
			/>
			<text x="60" y="54" text-anchor="middle" class="diagram-desc">
				{#each col.desc as line, i (line)}
					<tspan x="60" dy={i === 0 ? 0 : 13}>{line}</tspan>
				{/each}
			</text>
		</g>
	{/each}
</svg>
