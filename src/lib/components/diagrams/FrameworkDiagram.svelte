<script lang="ts">
	import type { FrameworkDiagramId } from '#lib/data/frameworkContent/types';
	import { diagramMeta } from './diagramMeta';
	import ArcsDiagram from './ArcsDiagram.svelte';
	import DarkPatternsDiagram from './DarkPatternsDiagram.svelte';
	import ExperienceDesignDiagram from './ExperienceDesignDiagram.svelte';
	import FlowDiagram from './FlowDiagram.svelte';
	import FoggDiagram from './FoggDiagram.svelte';
	import HcdDiagram from './HcdDiagram.svelte';
	import HexadDiagram from './HexadDiagram.svelte';
	import HookDiagram from './HookDiagram.svelte';
	import MdaDiagram from './MdaDiagram.svelte';
	import OctalysisDiagram from './OctalysisDiagram.svelte';
	import RecipeDiagram from './RecipeDiagram.svelte';
	import SdtBasicNeedsDiagram from './SdtBasicNeedsDiagram.svelte';
	import SdtMotivationSpectrumDiagram from './SdtMotivationSpectrumDiagram.svelte';
	import ServiceDesignDiagram from './ServiceDesignDiagram.svelte';
	import type { Component } from 'svelte';

	interface Props {
		id: FrameworkDiagramId;
	}

	let { id }: Props = $props();

	const components: Record<FrameworkDiagramId, Component> = {
		'sdt-spectrum': SdtMotivationSpectrumDiagram,
		'sdt-needs': SdtBasicNeedsDiagram,
		flow: FlowDiagram,
		arcs: ArcsDiagram,
		octalysis: OctalysisDiagram,
		hexad: HexadDiagram,
		mda: MdaDiagram,
		fogg: FoggDiagram,
		hook: HookDiagram,
		'meaningful-gamification': RecipeDiagram,
		'dark-patterns': DarkPatternsDiagram,
		hcd: HcdDiagram,
		'experience-design': ExperienceDesignDiagram,
		'service-design': ServiceDesignDiagram
	};

	const meta = $derived(diagramMeta[id]);
	const Diagram = $derived(components[id]);
	const captionId = $derived(`diagram-caption-${id}`);
</script>

<figure
	class="framework-diagram glass-panel"
	class:sdt-spectrum={id === 'sdt-spectrum'}
	class:sdt-needs={id === 'sdt-needs'}
>
	<div class="diagram-frame" role="img" aria-labelledby={captionId}>
		<Diagram />
	</div>
	<figcaption id={captionId}>
		{meta.caption}
		<span class="sr-only">{meta.longDescription}</span>
	</figcaption>
</figure>

<style>
	.framework-diagram {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.75rem;
		margin: 0 0 1.75rem;
		padding: 1.15rem 1.25rem;
		overflow: hidden;
		box-sizing: border-box;
	}

	.framework-diagram.sdt-spectrum {
		overflow: visible;
	}

	.diagram-frame {
		width: 100%;
		overflow-x: auto;
		overflow-y: visible;
		min-height: 0;
		flex: 0 0 auto;
	}

	.framework-diagram.sdt-spectrum .diagram-frame {
		overflow-x: auto;
	}

	.diagram-frame :global(svg) {
		display: block;
		width: 100%;
		max-width: 40rem;
		margin: 0 auto;
		height: auto;
	}

	.framework-diagram.sdt-spectrum .diagram-frame :global(svg),
	.framework-diagram.sdt-needs .diagram-frame :global(svg) {
		max-width: 45rem;
		min-width: min(100%, 20rem);
	}

	.framework-diagram.sdt-needs {
		overflow: visible;
	}

	.diagram-frame :global(.diagram-label) {
		font-family: var(--font-sans);
		font-size: 11px;
		font-weight: 600;
		fill: var(--diagram-text);
	}

	.diagram-frame :global(.diagram-label-on-dark) {
		font-family: var(--font-sans);
		font-size: 11px;
		font-weight: 600;
		fill: var(--diagram-text-on-dark);
	}

	.diagram-frame :global(.diagram-muted) {
		fill: var(--diagram-text-muted);
		font-size: 10px;
		font-weight: 500;
	}

	.diagram-frame :global(.diagram-desc) {
		fill: var(--diagram-text-muted);
		font-family: var(--font-sans);
		font-size: 10px;
		font-weight: 500;
	}

	.diagram-frame :global(.diagram-title) {
		font-size: 12px;
		font-weight: 700;
		fill: var(--color-accent-strong);
	}

	.diagram-frame :global(.diagram-segment) {
		stroke: var(--diagram-segment-border);
		stroke-width: 1.5;
	}

	.diagram-frame :global(.diagram-segment-amotivation) {
		fill: var(--diagram-segment-amotivation);
	}

	.diagram-frame :global(.diagram-segment-external) {
		fill: var(--diagram-segment-external);
	}

	.diagram-frame :global(.diagram-segment-introjected) {
		fill: var(--diagram-segment-introjected);
	}

	.diagram-frame :global(.diagram-segment-identified) {
		fill: var(--diagram-segment-identified);
	}

	.diagram-frame :global(.diagram-segment-integrated) {
		fill: var(--diagram-segment-integrated);
	}

	.diagram-frame :global(.diagram-segment-intrinsic) {
		fill: var(--diagram-segment-intrinsic);
		stroke: var(--diagram-segment-border);
	}

	figcaption {
		margin: 0;
		flex: 0 0 auto;
		font-size: 0.8125rem;
		line-height: 1.45;
		color: var(--color-muted);
		text-align: center;
		max-width: 36rem;
		margin-left: auto;
		margin-right: auto;
	}
</style>
