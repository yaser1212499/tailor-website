"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, Globe, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"
import { AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // استفاده از requestAnimationFrame برای بهینه‌سازی عملکرد
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "fa" ? "en" : "fa")
  }

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("services"), href: "/services" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("fabrics"), href: "/fabrics" },
    { name: t("appointment"), href: "/appointment" },
    { name: t("contact"), href: "/contact" },
  ]

  return (
    <>
      <header className={`floating-header ${isScrolled ? "scrolled" : ""} glassmorphism-header`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-gradient">{t("hero.title")}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-copper-500 ${
                    pathname === item.href ? "text-copper-500" : "text-slate-800 dark:text-slate-200"
                  } ${language === "fa" ? "ml-2" : "mr-2"}`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute left-0 top-full block h-[2px] w-full bg-copper-500 dark:bg-copper-400"></span>
                  )}
                </Link>
              ))}
              <Button asChild className="btn-primary ml-2">
                <Link href="/order">{t("order")}</Link>
              </Button>
            </nav>

            {/* Theme and Language Toggle */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="mr-2 hover-scale"
                aria-label="Toggle Language"
              >
                <Globe className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                <span className="sr-only">تغییر زبان</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="mr-2 hover-scale"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-slate-300" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
                <span className="sr-only">تغییر تم</span>
              </Button>

              <Button asChild variant="ghost" size="icon" className="mr-2 hover-scale md:hidden">
                <Link href="/order" aria-label="Order">
                  <ShoppingBag className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-scale hardware-accelerated"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                )}
                <span className="sr-only">منو</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Popup from top */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[72px] left-0 right-0 z-40 glassmorphism-menu shadow-elegant">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-3 text-base font-medium transition-colors hover:text-copper-500 ${
                    pathname === item.href ? "text-copper-500" : "text-slate-800 dark:text-slate-200"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full btn-primary mt-2">
                <Link href="/order">{t("order")}</Link>
              </Button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
