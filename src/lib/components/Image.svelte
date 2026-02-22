<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type ImageProps = WithElementRef<HTMLImgAttributes, HTMLImageElement> & {
		src: string;
		alt: string;
		class?: string;
		width?: number;
		height?: number;
		loading?: 'lazy' | 'eager' | 'auto';
	};

	let {
		src,
		alt,
		class: className,
		width,
		height,
		loading = 'lazy',
		...restProps
	}: ImageProps = $props();
</script>

<img {src} {alt} {loading} class={cn('', className)} {...restProps} {width} {height} />
