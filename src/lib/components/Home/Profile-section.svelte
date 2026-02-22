<script lang="ts">
	import Container from '$components/Container.svelte';
	import Image from '$components/Image.svelte';
	import SeparateBox from '$components/Separator/Separate-box.svelte';
</script>

<section id="profile">
	<Container class="flex h-40  lg:h-48 p-1">
		<!-- My image -->
		<!-- border -r means -> r| if you only set border it wraps around the content  -->
		<div class="relative flex h-full items-center justify-center border-r">
			<!-- Profile image -->
			<div class="relative flex items-center justify-center">
				<Image
					src="/profile.jpeg"
					alt="Imal's profile picture"
					class=" aspect-square rounded-full border border-neutral-500 object-cover p-1 transition-all duration-300"
					aria-label="Imal's profile picture"
					loading="lazy"
					width={256}
					height={256}
				/>
			</div>
		</div>
		<!-- My image end-->

		<!-- Details -->
		<div class="relative z-10 flex h-full w-full flex-col justify-end">
			<SeparateBox class="h-3/5 overflow-hidden"></SeparateBox>

			<div class="flex h-1/5 items-center border-t">
				<h1 class="px-4 text-2xl font-bold">Imal Kesara.</h1>
			</div>

			<div class="flex h-1/5 items-center justify-self-end border-t">
				<p class="px-4 text-sm">Full Stack Web Developer & Mobile developer.</p>
			</div>
		</div>
	</Container>
</section>
