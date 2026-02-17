<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Imal Kesara</title>
</svelte:head>

<!-- selection does highlights when you trying to select any text  -->
<main class="selection:bg-foreground selection:text-background">
	<Navbar />
	{@render children()}
</main>
