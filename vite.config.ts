import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/https://github.com/kyrban2/react-vite2/', // ⚠️ ЗАМЕНИТЕ на ваше имя репозитория
	plugins: [react()],
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
