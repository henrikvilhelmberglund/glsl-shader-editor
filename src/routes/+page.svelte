<script>
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import Footer from "$lib/Footer.svelte";
	import DarkModeToggle from "$lib/theme/DarkModeToggle.svelte";
	import ThemeSwitcher from "$lib/theme/ThemeSwitcher.svelte";
	import { browser } from "$app/environment";

	import { Canvas } from "@threlte/core";
	import Scene from "./Scene.svelte";

	// let color = "blue";
	// $: if (browser) color = localStorage.color;
</script>

<main
	class="dark:bg-primary-950 bg-primary-100 min-w-screen flex min-h-screen flex-col items-center [&>*]:m-4">
	<header>
		<ThemeSwitcher />
		<DarkModeToggle />
	</header>

	<div class="absolute top-12 h-[40vh] w-[80vw]">
		<Canvas>
			<Scene />
		</Canvas>
	</div>
</main>

<Footer />

<style>
</style>
