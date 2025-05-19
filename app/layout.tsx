import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BottomNavbar from "@/components/bottom-navbar"
import WhatsAppWidget from "@/components/whatsapp-widget"

// Optimize font loading
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
  preload: true,
  weight: ["400", "500", "700"],
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  preload: true,
  weight: ["700"],
})

export const metadata: Metadata = {
  title: "خیاطی نوراحمد سلیمانی | خیاط حرفه‌ای در هرات، افغانستان",
  description:
    "خدمات خیاطی لوکس در هرات، افغانستان. دوخت کت و شلوار سفارشی، لباس عروسی و تغییرات توسط استاد خیاط نوراحمد سلیمانی.",
  metadataBase: new URL("https://tailornoorahmad.af"),
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${vazirmatn.variable} ${playfairDisplay.variable} font-vazirmatn`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <BottomNavbar />
              <WhatsAppWidget />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
