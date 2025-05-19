"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { motion, AnimatePresence } from "framer-motion"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const { t, language } = useLanguage()
  const phoneNumber = "93791234567" // شماره واتساپ خیاط

  const handleWhatsAppClick = () => {
    const messageText =
      message ||
      (language === "fa"
        ? "سلام، می‌خواهم درباره خدمات خیاطی شما اطلاعات بیشتری کسب کنم."
        : "Hello, I would like to know more about your tailoring services.")

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, "_blank")
    setIsOpen(false)
    setMessage("")
  }

  return (
    <div className="whatsapp-widget">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-elegant p-4 max-w-xs"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{t("whatsapp.title")}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-8 w-8"
              >
                <X className="h-4 w-4 text-slate-500" />
              </Button>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{t("whatsapp.text")}</p>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === "fa" ? "پیام شما..." : "Your message..."}
                  className="w-full px-4 py-2 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-copper-400"
                />
              </div>
            </div>

            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center"
              onClick={handleWhatsAppClick}
            >
              <Send className="h-4 w-4 mr-2" />
              {t("whatsapp.button")}
            </Button>
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 2,
                repeatDelay: 1,
              }}
              className="absolute inset-0 bg-green-500 rounded-full opacity-30"
            ></motion.div>
            <Button
              className="relative rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-elegant"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">واتساپ</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
