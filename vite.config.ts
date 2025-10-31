import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: 'camelCase',
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@assets': resolve(__dirname, 'src/assets'),
			'@images': resolve(__dirname, 'src/assets/images'),
		},
	},
	// Оптимизация для статических assets
	build: {
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				assetFileNames: assetInfo => {
					let extType = assetInfo.name.split('.').at(1)
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'images'
					}
					return `assets/${extType}/[name]-[hash][extname]`
				},
			},
		},
	},
})
