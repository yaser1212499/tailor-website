"use client"

import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import { useLanguage } from "./language-provider"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-copper"></div>
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-copper-500/5"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-copper-500/5"></div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-copper-400">{t("hero.title")}</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">{t("intro.text")}</p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-copper-900/30 flex items-center justify-center text-slate-300 hover:text-copper-400 hover:bg-copper-900/50 transition-colors mr-4"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-copper-900/30 flex items-center justify-center text-slate-300 hover:text-copper-400 hover:bg-copper-900/50 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-copper-400">{t("home")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-copper-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-copper-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-copper-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-300 hover:text-copper-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("gallery")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-copper-400">{t("services.title")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-copper-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("services.custom")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-copper-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("services.wedding")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-copper-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("services.alterations")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-300 hover:text-copper-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-copper-500 rounded-full mr-2"></span>
                  {t("services.traditional")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-copper-400">{t("contact.title")}</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-copper-900/30 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-copper-400" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">123 Herat Street, Herat, Afghanistan</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-copper-900/30 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-copper-400" />
                </div>
                <p className="text-slate-300 text-sm">+93 79 123 4567</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-copper-900/30 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-copper-400" />
                </div>
                <p className="text-slate-300 text-sm">info@tailornoorahmad.af</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} {t("hero.title")}. {t("footer.rights")}.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-copper-400 transition-colors mr-6">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-copper-400 transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-8 right-4 z-50 w-10 h-10 rounded-full bg-copper-600 text-white flex items-center justify-center shadow-elegant hover:bg-copper-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
