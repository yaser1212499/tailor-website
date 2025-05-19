"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ImageIcon, ShoppingBag, Calendar, Phone } from "lucide-react"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export default function BottomNavbar() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { name: t("bottom.home"), href: "/", icon: <Home className="h-5 w-5" /> },
    { name: t("bottom.gallery"), href: "/gallery", icon: <ImageIcon className="h-5 w-5" /> },
    { name: t("bottom.order"), href: "/order", icon: <ShoppingBag className="h-5 w-5" /> },
    { name: t("bottom.appointment"), href: "/appointment", icon: <Calendar className="h-5 w-5" /> },
    { name: t("bottom.contact"), href: "/contact", icon: <Phone className="h-5 w-5" /> },
  ]

  return (
    <div className="bottom-navbar md:hidden">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center p-2 transition-colors ${
              pathname === item.href
                ? "text-copper-500"
                : "text-slate-700 dark:text-slate-300 hover:text-copper-500 dark:hover:text-copper-400"
            }`}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
              {pathname === item.href ? (
                <>
                  <div className="absolute -inset-1 rounded-full bg-copper-100 dark:bg-copper-900/30"></div>
                  <div className="relative">{item.icon}</div>
                </>
              ) : (
                item.icon
              )}
            </motion.div>
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
