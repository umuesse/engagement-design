<script lang="ts">
	const columns = [
		{
			title: 'Verbundenheit',
			sub: 'Relatedness',
			desc: ['Zugehörigkeit und', 'geteiltes Vertrauen'],
			headerFill: 'var(--color-accent-alt)',
			bodyFill: 'var(--diagram-segment-integrated)'
		},
		{
			title: 'Autonomie',
			sub: 'Autonomy',
			desc: ['Spielraum und', 'Selbststeuerung'],
			headerFill: '#433855',
			bodyFill: 'var(--diagram-segment-introjected)'
		},
		{
			title: 'Meisterschaft',
			sub: 'Mastery',
			desc: ['Wachsen an', 'passenden Aufgaben'],
			headerFill: 'var(--diagram-segment-intrinsic)',
			bodyFill: 'var(--diagram-segment-identified)'
		},
		{
			title: 'Sinn',
			sub: 'Purpose',
			desc: ['Beitrag zu etwas', 'Größerem'],
			headerFill: 'var(--diagram-segment-external)',
			bodyFill: 'var(--diagram-segment-amotivation)'
		}
	] as const;

	const colWidth = 158;
	const colGap = 16;
	const padX = 20;
	const headerH = 36;
	const bodyH = 96;

	const dropCenters = columns.map((_, i) => padX + i * (colWidth + colGap) + colWidth / 2);
	const colXs = columns.map((_, i) => padX + i * (colWidth + colGap));
</script>

<div class="ramp-pillars-wrap">
	<svg
		class="layout-horizontal"
		viewBox="0 0 720 176"
		width="100%"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M {dropCenters[0]} 18 L {dropCenters[3]} 18 M {dropCenters[0]} 18 L {dropCenters[0]} 34 M {dropCenters[1]} 18 L {dropCenters[1]} 34 M {dropCenters[2]} 18 L {dropCenters[2]} 34 M {dropCenters[3]} 18 L {dropCenters[3]} 34"
			fill="none"
			stroke="var(--diagram-segment-border)"
			stroke-width="2"
			stroke-linecap="round"
		/>

		{#each columns as col, i (col.sub)}
			<g transform="translate({colXs[i]}, 34)">
				<rect
					x="0"
					y="0"
					width={colWidth}
					height={headerH}
					rx="8"
					fill={col.headerFill}
					stroke="var(--diagram-segment-border)"
					stroke-width="1.5"
				/>
				<text x={colWidth / 2} y="16" text-anchor="middle" class="diagram-label-on-dark">{col.title}</text>
				<text x={colWidth / 2} y="30" text-anchor="middle" class="diagram-muted">{col.sub}</text>
				<rect
					x="0"
					y={headerH}
					width={colWidth}
					height={bodyH}
					rx="8"
					fill={col.bodyFill}
					stroke="var(--diagram-segment-border)"
					stroke-width="1.5"
				/>
				<clipPath id="clip-ramp-h-{i}">
					<rect x="0" y={headerH} width={colWidth} height={bodyH} rx="8" />
				</clipPath>
				<text
					x={colWidth / 2}
					y={headerH + 28}
					text-anchor="middle"
					class="diagram-desc"
					clip-path="url(#clip-ramp-h-{i})"
				>
					{#each col.desc as line, li (line)}
						<tspan x={colWidth / 2} dy={li === 0 ? 0 : 15}>{line}</tspan>
					{/each}
				</text>
			</g>
		{/each}
	</svg>

	<svg
		class="layout-vertical"
		viewBox="0 0 320 724"
		width="100%"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<line
			x1="160"
			y1="12"
			x2="160"
			y2="712"
			stroke="var(--diagram-segment-border)"
			stroke-width="2"
			stroke-linecap="round"
		/>
		{#each columns as col, i (col.sub)}
			{@const y = 20 + i * 176}
			<g transform="translate(24, {y})">
				<line
					x1="136"
					y1="-8"
					x2="136"
					y2="0"
					stroke="var(--diagram-segment-border)"
					stroke-width="2"
				/>
				<rect
					x="0"
					y="0"
					width="272"
					height={headerH}
					rx="8"
					fill={col.headerFill}
					stroke="var(--diagram-segment-border)"
					stroke-width="1.5"
				/>
				<text x="136" y="16" text-anchor="middle" class="diagram-label-on-dark">{col.title}</text>
				<text x="136" y="30" text-anchor="middle" class="diagram-muted">{col.sub}</text>
				<rect
					x="0"
					y={headerH}
					width="272"
					height={bodyH}
					rx="8"
					fill={col.bodyFill}
					stroke="var(--diagram-segment-border)"
					stroke-width="1.5"
				/>
				<clipPath id="clip-ramp-v-{i}">
					<rect x="0" y={headerH} width="272" height={bodyH} rx="8" />
				</clipPath>
				<text
					x="136"
					y={headerH + 28}
					text-anchor="middle"
					class="diagram-desc"
					clip-path="url(#clip-ramp-v-{i})"
				>
					{#each col.desc as line, li (line)}
						<tspan x="136" dy={li === 0 ? 0 : 15}>{line}</tspan>
					{/each}
				</text>
			</g>
		{/each}
	</svg>
</div>

<style>
	.ramp-pillars-wrap {
		width: 100%;
	}

	.layout-horizontal {
		display: block;
	}

	.layout-vertical {
		display: none;
	}

	@media (max-width: 40rem) {
		.layout-horizontal {
			display: none;
		}

		.layout-vertical {
			display: block;
		}
	}
</style>
