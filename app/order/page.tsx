"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { MessageCircle, Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function OrderPage() {
  const { t, language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clothingType: "",
    fabric: "",
    model: "",
    amount: "",
    description: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [smsSent, setSmsSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // در یک برنامه واقعی، اینجا فرم را ارسال می‌کنید
    setSubmitted(true)

    // شبیه‌سازی ارسال پیامک
    setTimeout(() => {
      setSmsSent(true)
    }, 2000)
  }

  const handleWhatsAppSubmit = () => {
    const message =
      language === "fa"
        ? `
سلام، من می‌خواهم سفارش جدیدی ثبت کنم:

نام: ${formData.name}
شماره تماس: ${formData.phone}
نوع لباس: ${formData.clothingType}
پارچه: ${formData.fabric}
مدل: ${formData.model}
متراژ: ${formData.amount}
توضیحات: ${formData.description}
      `
        : `
Hello, I would like to place a new order:

Name: ${formData.name}
Phone: ${formData.phone}
Clothing Type: ${formData.clothingType}
Fabric: ${formData.fabric}
Model: ${formData.model}
Amount: ${formData.amount}
Description: ${formData.description}
      `
    window.open(`https://wa.me/93791234567?text=${encodeURIComponent(message)}`, "_blank")
  }

  const clothingTypes = [
    { id: "suit", name: language === "fa" ? "کت و شلوار" : "Suit" },
    { id: "shirt", name: language === "fa" ? "پیراهن" : "Shirt" },
    { id: "pants", name: language === "fa" ? "شلوار" : "Pants" },
    { id: "traditional", name: language === "fa" ? "لباس سنتی" : "Traditional" },
    { id: "wedding", name: language === "fa" ? "لباس عروسی" : "Wedding Attire" },
    { id: "other", name: language === "fa" ? "سایر" : "Other" },
  ]

  const fabrics = [
    { id: "wool", name: language === "fa" ? "پشمی" : "Wool" },
    { id: "cotton", name: language === "fa" ? "پنبه‌ای" : "Cotton" },
    { id: "linen", name: language === "fa" ? "کتان" : "Linen" },
    { id: "silk", name: language === "fa" ? "ابریشمی" : "Silk" },
    { id: "traditional", name: language === "fa" ? "سنتی" : "Traditional" },
    { id: "other", name: language === "fa" ? "سایر" : "Other" },
  ]

  const models = [
    { id: "modern", name: language === "fa" ? "مدرن" : "Modern" },
    { id: "classic", name: language === "fa" ? "کلاسیک" : "Classic" },
    { id: "slim", name: language === "fa" ? "اسلیم" : "Slim Fit" },
    { id: "traditional", name: language === "fa" ? "سنتی" : "Traditional" },
    { id: "other", name: language === "fa" ? "سایر" : "Other" },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="relative h-[50vh] hero-pattern flex items-center">
        <div className="absolute inset-0 bg-gradient-to-l from-darkblue/90 to-darkblue/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("order.title")}</h1>
            <p className="text-xl text-gray-200">{t("order.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 md:py-24 bg-cream dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Card className="rounded-2xl overflow-hidden shadow-gold">
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("order.name")}</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("order.phone")}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          required
                          className="form-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{t("order.type")}</Label>
                        <Select onValueChange={(value) => handleSelectChange("clothingType", value)}>
                          <SelectTrigger className="form-input">
                            <SelectValue placeholder={t("order.type")} />
                          </SelectTrigger>
                          <SelectContent>
                            {clothingTypes.map((type) => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("order.fabric")}</Label>
                        <Select onValueChange={(value) => handleSelectChange("fabric", value)}>
                          <SelectTrigger className="form-input">
                            <SelectValue placeholder={t("order.fabric")} />
                          </SelectTrigger>
                          <SelectContent>
                            {fabrics.map((fabric) => (
                              <SelectItem key={fabric.id} value={fabric.id}>
                                {fabric.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>{t("order.model")}</Label>
                          <Select onValueChange={(value) => handleSelectChange("model", value)}>
                            <SelectTrigger className="form-input">
                              <SelectValue placeholder={t("order.model")} />
                            </SelectTrigger>
                            <SelectContent>
                              {models.map((model) => (
                                <SelectItem key={model.id} value={model.id}>
                                  {model.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amount">{t("order.amount")}</Label>
                          <div className="flex items-center">
                            <Input
                              id="amount"
                              name="amount"
                              value={formData.amount}
                              onChange={handleChange}
                              type="number"
                              min="1"
                              className="form-input flex-1"
                            />
                            <span className="mr-2">{t("fabrics.meter")}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">{t("order.description")}</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={4}
                          placeholder={
                            language === "fa"
                              ? "لطفاً هرگونه جزئیات خاص، مدل مورد نظر یا نیازهای خود را شرح دهید."
                              : "Please describe any specific details, preferred model, or your needs."
                          }
                          className="form-input"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button
                            type="button"
                            className="w-full bg-green-500 hover:bg-green-600 text-white"
                            onClick={handleWhatsAppSubmit}
                          >
                            <MessageCircle className="h-5 w-5 mr-2" />
                            {t("order.whatsapp")}
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                          <Button type="submit" className="w-full btn-darkblue dark:btn-gold">
                            {t("order.submit")}
                          </Button>
                        </motion.div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center p-8 bg-white dark:bg-darkblue rounded-2xl shadow-gold"
              >
                <div className="text-5xl text-gold mb-6">
                  <Check className="h-16 w-16 mx-auto" />
                </div>
                <h2 className="text-2xl font-bold text-darkblue dark:text-gold mb-4">{t("order.success")}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{t("order.success.text")}</p>

                {smsSent && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-md p-4 mb-6">
                    <p className="text-green-800 dark:text-green-200">
                      {language === "fa"
                        ? "یک پیامک تأیید به شماره شما ارسال شد."
                        : "A confirmation SMS has been sent to your number."}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={() => {
                        setSubmitted(false)
                        setSmsSent(false)
                      }}
                      className="btn-darkblue dark:btn-gold"
                    >
                      {language === "fa" ? "ثبت سفارش جدید" : "Place New Order"}
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" className="btn-outline-darkblue dark:btn-outline-gold">
                      <Link href="/">{language === "fa" ? "بازگشت به صفحه اصلی" : "Return to Home"}</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
