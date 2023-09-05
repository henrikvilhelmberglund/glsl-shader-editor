<script>
	import MeltAccordion from "$lib/melt-examples/MeltAccordion.svelte";
	import { color } from "$lib/stores";
</script>


  
<main class="p-0 pt-20 translate-x-[-50%] flex flex-col items-center">
	<h1 class="text-primary-900 dark:text-primary-100 text-9xl">Hello!</h1>
	<p class="text-primary-900 dark:text-primary-100">This is the {$color} theme.</p>
	<button class="btn-primary">A {$color} button</button>
	<button class="btn-secondary">A {$color} secondary button</button>
	<p class="text-primary-900 dark:text-primary-100">Now with Melt!</p>
	<MeltAccordion />
</main>

<style>
</style>
