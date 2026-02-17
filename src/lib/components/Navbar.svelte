<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Moon, X, TextAlignEnd } from 'lucide-svelte';
	import Container from './Container.svelte';
	import { cn } from '$lib/utils';
	import { page } from '$app/state';
	import ThemeToggle from './Theme-toggle.svelte';
	import { Button } from '$lib/components/ui/button';

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

	$effect(() => {
		currentPage = (
			page.url.pathname.split('/')[1] ? `/${page.url.pathname.split('/')[1]}` : '/'
		) as typeof currentPage;
		console.log(currentPage);
	});
</script>

<header class="inset-x-2 top-0 left-0 z-20 bg-background text-sm">
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
		</nav>
	</Container>
	<Separator />
</header>
