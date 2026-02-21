<script lang="ts">
	import { slide } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';

	let { children, url } = $props();
</script>

{#key url}
	<div
		class="h-full"
		in:slide={{ axis: 'y', easing: elasticInOut, duration: 300 }}
		out:slide={{ axis: 'y', easing: elasticInOut, duration: 300 }}
	>
		{@render children()}
	</div>
{/key}
