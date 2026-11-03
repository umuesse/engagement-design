<svg
	viewBox="0 0 400 248"
	width="100%"
	preserveAspectRatio="xMidYMid meet"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<defs>
		<marker id="sdt-needs-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
			<path d="M0,0 L7,3.5 L0,7 Z" fill="var(--diagram-segment-border)" />
		</marker>
	</defs>

	<polygon
		points="200,36 48,200 352,200"
		fill="none"
		stroke="var(--diagram-segment-border)"
		stroke-width="1.5"
		stroke-dasharray="4 3"
		opacity="0.65"
	/>

	<g>
		<circle cx="200" cy="52" r="34" class="diagram-segment diagram-segment-identified" stroke-width="2" />
		<text x="200" y="48" text-anchor="middle" class="diagram-label">Autonomie</text>
		<text x="200" y="62" text-anchor="middle" class="diagram-desc">Wahlfreiheit</text>
	</g>
	<g>
		<circle cx="72" cy="200" r="34" class="diagram-segment diagram-segment-external" stroke-width="2" />
		<text x="72" y="196" text-anchor="middle" class="diagram-label">Kompetenz</text>
		<text x="72" y="210" text-anchor="middle" class="diagram-desc">Wachstum</text>
	</g>
	<g>
		<circle cx="328" cy="200" r="34" class="diagram-segment diagram-segment-integrated" stroke-width="2" />
		<text x="328" y="192" text-anchor="middle" class="diagram-label">Soziale</text>
		<text x="328" y="206" text-anchor="middle" class="diagram-label">Eingebundenheit</text>
		<text x="328" y="218" text-anchor="middle" class="diagram-desc">Zugehörigkeit</text>
	</g>

	<path
		d="M 200 86 L 200 118"
		fill="none"
		stroke="var(--diagram-segment-border)"
		stroke-width="2.5"
		marker-end="url(#sdt-needs-arrow)"
	/>
	<path
		d="M 98 178 Q 140 150 168 138"
		fill="none"
		stroke="var(--diagram-segment-border)"
		stroke-width="2.5"
		marker-end="url(#sdt-needs-arrow)"
	/>
	<path
		d="M 302 178 Q 260 150 232 138"
		fill="none"
		stroke="var(--diagram-segment-border)"
		stroke-width="2.5"
		marker-end="url(#sdt-needs-arrow)"
	/>

	<ellipse cx="200" cy="148" rx="78" ry="32" class="diagram-segment diagram-segment-intrinsic" stroke-width="2" />
	<text x="200" y="144" text-anchor="middle" class="diagram-label-on-dark">Intrinsische</text>
	<text x="200" y="160" text-anchor="middle" class="diagram-label-on-dark">Motivation</text>
</svg>
