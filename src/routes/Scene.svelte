<script>
	import { T, useFrame } from "@threlte/core";
	import { interactivity } from "@threlte/extras";
	import { spring } from "svelte/motion";
	interactivity();
	const scale = spring(1);
	let rotation = 0;
	useFrame((state, delta) => {
		rotation += delta;
	});
	import { HTML } from "@threlte/extras";
	import Markup from "./Markup.svelte";
	import { AmbientLight, Texture } from "three";
	import { color, fragment, vertex } from "$lib/stores";
	import { TextureLoader } from "three";
	import { useLoader } from "@threlte/core";

	const texture = useLoader(TextureLoader).load("/Henrik.png");

	$: fragmentShader = $fragment;
</script>

<HTML>
	<main class="flex translate-x-[-50%] flex-col items-center p-0 pt-20">
		<textarea bind:value={$fragment} name="" id="" cols="100" rows="20" />
	</main>
</HTML>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}} />
<T.DirectionalLight position={[0, 10, 10]} intensity={1} castShadow />
<T.AmbientLight color={$color} intensity={1.9} />
<T.Mesh
	rotation.y={rotation}
	position.y={1}
	scale={$scale}
	on:pointerenter={() => scale.set(2.5)}
	on:pointerleave={() => scale.set(1)}
	castShadow>
	<T.BoxGeometry args={[2, 2, 2]} />
	{#if $texture}
		<T.MeshStandardMaterial map={$texture} />
	{/if}
</T.Mesh>
<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.Texture />
	<T.CircleGeometry args={[5, 40]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>
{#key fragmentShader}
	<T.Mesh>
		<T.PlaneGeometry args={[window.innerWidth, window.innerHeight, 40]} />
		<T.ShaderMaterial {fragmentShader} />
	</T.Mesh>
{/key}
