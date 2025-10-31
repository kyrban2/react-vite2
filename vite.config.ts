import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	// ✅ ПРАВИЛЬНАЯ НАСТРОЙКА BASE для GitHub Pages
	base: '/react-vite2/', // ⚠️ Замените на имя вашего репозитория (только имя, без github.com)

	plugins: [
		react({
			jsxRuntime: 'automatic',
		}),
	],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "@/styles/variables" as *;
          @use "@/styles/mixins" as *;
        `,
			},
		},
	},

	server: {
		port: 3000,
		open: true,
	},

	build: {
		outDir: 'dist',
		sourcemap: true,
	},
})
