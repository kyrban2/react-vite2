declare module '*.module.css' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

// Изображения
declare module '*.svg' {
	import React from 'react'
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	const src: string
	export default src
}

declare module '*.png' {
	const content: string
	export default content
}

declare module '*.jpg' {
	const content: string
	export default content
}

declare module '*.jpeg' {
	const content: string
	export default content
}

declare module '*.gif' {
	const content: string
	export default content
}

declare module '*.webp' {
	const content: string
	export default content
}

declare module '*.ico' {
	const content: string
	export default content
}

declare module '*.bmp' {
	const content: string
	export default content
}
