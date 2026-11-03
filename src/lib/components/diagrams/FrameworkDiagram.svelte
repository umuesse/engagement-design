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
	import SdtDiagram from './SdtDiagram.svelte';
	import ServiceDesignDiagram from './ServiceDesignDiagram.svelte';
	import type { Component } from 'svelte';

	interface Props {
		id: FrameworkDiagramId;
	}

	let { id }: Props = $props();

	const components: Record<FrameworkDiagramId, Component> = {
		sdt: SdtDiagram,
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

<figure class="framework-diagram glass-panel">
	<div class="diagram-frame" role="img" aria-labelledby={captionId}>
		<Diagram />
	</div>
	<figcaption id={captionId}>{meta.caption}</figcaption>
	<p class="sr-only">{meta.longDescription}</p>
</figure>

<style>
	.framework-diagram {
		margin: 0 0 1.75rem;
		padding: 1rem 1rem 0.85rem;
		border: 1px solid var(--color-border);
		overflow: hidden;
	}

	.diagram-frame {
		width: 100%;
		overflow-x: auto;
	}

	.diagram-frame :global(svg) {
		display: block;
		width: 100%;
		max-width: 36rem;
		margin: 0 auto;
		height: auto;
	}

	.diagram-frame :global(.diagram-label) {
		font-family: var(--font-sans);
		font-size: 11px;
		font-weight: 600;
		fill: var(--color-text);
	}

	.diagram-frame :global(.diagram-muted) {
		fill: var(--color-muted);
		font-size: 10px;
		font-weight: 500;
	}

	.diagram-frame :global(.diagram-title) {
		font-size: 12px;
		font-weight: 700;
		fill: var(--color-accent-strong);
	}

	figcaption {
		margin-top: 0.75rem;
		font-size: 0.8125rem;
		line-height: 1.45;
		color: var(--color-muted);
		text-align: center;
		max-width: 36rem;
		margin-left: auto;
		margin-right: auto;
	}
</style>
