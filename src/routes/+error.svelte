<script lang="ts">
	import { page } from '$app/state';
	import Container from '$lib/components/Container.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';

	const rows = 40;
	const cols = 40;
	const isPageNotFound = page.status === 404;
</script>

<Separator />
<Container class="h-[45vh] w-full overflow-hidden">
	<div class="relative h-full w-full overflow-hidden">
		<div
			class="absolute"
			style="
				transform: rotateX(60deg) rotateZ(45deg) scale(2) translateX(-25%) translateY(-25%);
				transform-origin: center center;
				left: 50%;
				top: 30%;
				width: 800px;
				height: 600px;
				display: grid;
				grid-template-columns: repeat({cols}, 30px);
				grid-template-rows: repeat({rows}, 30px);
				gap: 0px;
				"
		>
			{#each Array.from({ length: rows * cols }) as box}
				<div class="border border-dashed border-gray-400 opacity-20"></div>
			{/each}
		</div>
	</div>
</Container>
<Separator />

<Container class="h-[45vh] w-full">
	<div
		class="flex h-full flex-col items-center justify-center gap-8 px-6 sm:flex-row sm:items-center sm:justify-between"
	>
		<h1
			class={cn(
				'text-center font-bold uppercase sm:w-1/2',
				isPageNotFound ? 'text-7xl sm:text-left' : 'text-center text-9xl'
			)}
		>
			{isPageNotFound ? 'Page not found' : page.status}
		</h1>

		<div class="flex flex-col items-center gap-4 text-center sm:w-1/2 sm:items-center sm:text-left">
			<h2 class="text-lg sm:text-2xl">
				{isPageNotFound ? "Couldn't find the page you were looking for." : page.error?.message}
			</h2>
			<a href="/">
				<Button variant="outline" class="cursor-pointer" aria-label="Go to Home btn">Go to Home</Button>
			</a>
		</div>
	</div>
</Container>
<Separator />
