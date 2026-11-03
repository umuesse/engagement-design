<script lang="ts">
	const columns = [
		{
			title: 'Kompetenz',
			desc: ['Wirksam sein im Umgang', 'mit der Umwelt'],
			headerFill: 'var(--diagram-segment-intrinsic)',
			bodyFill: 'var(--diagram-segment-identified)'
		},
		{
			title: 'Autonomie',
			desc: ['Selbstbestimmung über den', 'eigenen Lebensweg'],
			headerFill: '#433855',
			bodyFill: 'var(--diagram-segment-introjected)'
		},
		{
			title: 'Eingebundenheit',
			desc: ['Nahe, vertrauensvolle', 'Beziehungen zu anderen'],
			headerFill: 'var(--color-accent-alt)',
			bodyFill: 'var(--diagram-segment-integrated)'
		}
	] as const;

	const colWidth = 208;
	const colGap = 28;
	const padX = 16;
	const headerH = 36;
	const bodyH = 96;

	const dropCenters = columns.map((_, i) => padX + i * (colWidth + colGap) + colWidth / 2);
	const colXs = columns.map((_, i) => padX + i * (colWidth + colGap));
</script>

<div class="sdt-needs-wrap">
	<!-- Breite Darstellung -->
	<svg
		class="layout-horizontal"
		viewBox="0 0 720 176"
		width="100%"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<path
			d="M {dropCenters[0]} 18 L {dropCenters[2]} 18 M {dropCenters[0]} 18 L {dropCenters[0]} 34 M {dropCenters[1]} 18 L {dropCenters[1]} 34 M {dropCenters[2]} 18 L {dropCenters[2]} 34"
			fill="none"
			stroke="var(--diagram-segment-border)"
			stroke-width="2"
			stroke-linecap="round"
		/>

		{#each columns as col, i (col.title)}
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
				<text x={colWidth / 2} y="23" text-anchor="middle" class="diagram-label-on-dark">{col.title}</text>
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
				<clipPath id="clip-h-{i}">
					<rect x="0" y={headerH} width={colWidth} height={bodyH} rx="8" />
				</clipPath>
				<text
					x={colWidth / 2}
					y={headerH + 28}
					text-anchor="middle"
					class="diagram-desc"
					clip-path="url(#clip-h-{i})"
				>
					{#each col.desc as line, li (line)}
						<tspan x={colWidth / 2} dy={li === 0 ? 0 : 15}>{line}</tspan>
					{/each}
				</text>
			</g>
		{/each}
	</svg>

	<!-- Schmale Viewports: gestapelt -->
	<svg
		class="layout-vertical"
		viewBox="0 0 320 548"
		width="100%"
		preserveAspectRatio="xMidYMid meet"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<line
			x1="160"
			y1="12"
			x2="160"
			y2="536"
			stroke="var(--diagram-segment-border)"
			stroke-width="2"
			stroke-linecap="round"
		/>
		{#each columns as col, i (col.title)}
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
				<text x="136" y="23" text-anchor="middle" class="diagram-label-on-dark">{col.title}</text>
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
				<clipPath id="clip-v-{i}">
					<rect x="0" y={headerH} width="272" height={bodyH} rx="8" />
				</clipPath>
				<text
					x="136"
					y={headerH + 28}
					text-anchor="middle"
					class="diagram-desc"
					clip-path="url(#clip-v-{i})"
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
	.sdt-needs-wrap {
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
