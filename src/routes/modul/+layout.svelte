<script lang="ts">
	import ModulSubnav from '#lib/components/ModulSubnav.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<ModulSubnav />
{@render children()}
