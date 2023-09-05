import { sveltekit } from "@sveltejs/kit/vite";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";
import UnoCSS from "@unocss/svelte-scoped/vite";

// silly import to make changes in uno.config.js restart the Vite dev server
import { reloadMe } from "./uno.config";
import { defineConfig } from "vite";
export default defineConfig({
	ssr: {
		noExternal: ["three"],
	},
	plugins: [
		// broken?
		// { ...threeMinifier(), enforce: "pre" },
		UnoCSS({
			injectReset: "@unocss/reset/tailwind.css",
		}),
		sveltekit(),
	],
});
