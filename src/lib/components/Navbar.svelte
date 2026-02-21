<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Moon, X, TextAlignEnd, Monitor, Sun } from 'lucide-svelte';
	import Container from './Container.svelte';
	import { cn } from '$lib/utils';
	import { page } from '$app/state';
	import ThemeToggle from './Theme-toggle.svelte';
	import { Button } from '$lib/components/ui/button';
	import { resetMode, setMode, mode, theme } from 'mode-watcher';
	import { fade } from 'svelte/transition';

	const links = [
		{ id: 0, label: 'Portfolio', href: '/' },
		{ id: 1, label: 'Blog', href: '/blog' },
		{ id: 2, label: 'Projects', href: '/projects' }
	];

	let currentPage = $state(page.url.pathname);

	let isMenuOpen = $state(false);
	function handleMenuState() {
		isMenuOpen = !isMenuOpen;
	}

	function handleOutsideClick(e: MouseEvent | KeyboardEvent) {
		if (e.target !== e.currentTarget) return;
		isMenuOpen = false;
	}

	$effect(() => {
		currentPage = (
			page.url.pathname.split('/')[1] ? `/${page.url.pathname.split('/')[1]}` : '/'
		) as typeof currentPage;
	});
</script>

<header class="inset-x-2 top-0 left-0 z-20 bg-background text-sm sticky">
	<Separator />
	<Container>
		<nav class="mx-auto flex h-18 max-w-5xl items-center justify-between px-4">
			<div></div>
			<div class="flex items-center">
				{#each links as { href, label }}
					<a
						{href}
						aria-current={currentPage === href}
						class={cn(
							'mr-2',
							currentPage === href
								? 'font-medium text-foreground underline'
								: 'text-muted-foreground no-underline'
						)}>{label}</a
					>
				{/each}
			</div>

			<!-- hide in smaller screen -->
			<div class="hidden items-center gap-2 sm:flex">
				<!-- Theme toggle -->
				<ThemeToggle />
			</div>

			<!-- Menu icon / visible on smaller screen -->
			<div class="flex items-center sm:hidden">
				<Button
					aria-label="main menu"
					variant="ghost"
					size="icon"
					class="cursor-pointer rounded-full"
					onclick={handleMenuState}
				>
					{#if isMenuOpen}
						<X />
					{:else}
						<TextAlignEnd />
					{/if}
				</Button>
			</div>

			<!-- menu icon appearance -->
			{#if isMenuOpen}
				<div
					class="absolute top-12 right-4 z-20 w-58 flex-col border bg-background p-4 shadow-md"
					aria-label="Open Mobile Menu"
				>
					<div class="flex items-center justify-center">
						<span>Theme</span>
						<Button
							variant="ghost"
							size="icon"
							class="ml-2 cursor-pointer"
							onclick={() => setMode('dark')}
						>
							<Moon />
						</Button>

						<Button
							variant="ghost"
							size="icon"
							class="ml-2 cursor-pointer"
							onclick={() => {
								setMode('light');
							}}
						>
							<Sun />
						</Button>

						<Button
							variant="ghost"
							size="icon"
							class="cursor-pointer rounded-full"
							onclick={() => {
								resetMode();
							}}><Monitor fill={mode.current == 'dark' ? 'white' : 'black'} /></Button
						>
					</div>
				</div>
			{/if}

			{#if isMenuOpen}
				<div
					class="fixed top-0 left-0 z-10 h-full w-full bg-background/50 backdrop-blur-sm"
					onclick={handleOutsideClick}
					aria-hidden="true"
					in:fade={{ duration: 200, delay: 100 }}
					out:fade={{ duration: 200, delay: 100 }}
				></div>
			{/if}
		</nav>
	</Container>
</header>
