<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import PageTransition from '$lib/components/Transistion.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Imal Kesara</title>
</svelte:head>

<ModeWatcher />

<!-- selection does highlights when you trying to select any text  -->
<main class="selection:bg-foreground selection:text-background">
	<Navbar />
	<!-- when url change content of web page shows like ease in and out (animation) not view transition here we also implement "key" block when dom changes -->
	<PageTransition url={data.url}>
		<div>
			{@render children()}
		</div>
	</PageTransition>
</main>
