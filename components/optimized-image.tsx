"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  lowQualitySrc?: string
  className?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  lowQualitySrc,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simple intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "200px" },
    )

    const currentElement = document.getElementById(`image-${src}`)
    if (currentElement) observer.observe(currentElement)

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [src])

  // Use a low quality placeholder or blur
  const placeholder = lowQualitySrc ? "empty" : "blur"
  const blurDataURL =
    lowQualitySrc ||
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5IiAvPjwvc3ZnPg=="

  return (
    <div id={`image-${src}`} className={`relative overflow-hidden ${className}`}>
      {isVisible && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
      {isVisible && !isLoaded && lowQualitySrc && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
      )}
    </div>
  )
}
