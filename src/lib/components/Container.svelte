<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type ContainerProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		class?: string;
	};

	let { class: className, children, ...restProps }: ContainerProps = $props();
</script>

<div
	class={cn(
		'mx-auto flex h-full max-w-md items-center justify-center border-x sm:max-w-xl md:max-w-3xl lg:max-w-3xl',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
