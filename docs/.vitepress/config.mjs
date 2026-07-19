import { defineConfig } from 'vitepress'
import tailwindcss from "@tailwindcss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Hafiz Ahmad Husaini",
	description: "Portfolio",
	
	vite: {
		plugins: [tailwindcss()],
	},
})
