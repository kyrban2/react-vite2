import React, { useState } from 'react'

interface ImageWithFallbackProps {
	src: string
	fallbackSrc: string
	alt: string
	className?: string
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
	src,
	fallbackSrc,
	alt,
	className,
}) => {
	const [imgSrc, setImgSrc] = useState<string>(src)
	const [hasError, setHasError] = useState<boolean>(false)

	const handleError = (): void => {
		if (!hasError) {
			setImgSrc(fallbackSrc)
			setHasError(true)
		}
	}

	return (
		<img src={imgSrc} alt={alt} className={className} onError={handleError} />
	)
}

export default ImageWithFallback
