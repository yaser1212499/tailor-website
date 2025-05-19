import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Style Guide | Tailor Noor Ahmad Soleimani",
  description: "A comprehensive guide to the design system and components used in the Tailor Noor Ahmad website.",
}

export default function StyleGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
