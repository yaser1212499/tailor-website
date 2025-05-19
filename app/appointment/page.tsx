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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function AppointmentPage() {
  const { t, language } = useLanguage()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)
  const [smsSent, setSmsSent] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "",
    service: "",
    description: "",
  })

  // Custom function to format date in Persian style if needed
  const formatDate = (date: Date | undefined) => {
    if (!date) return ""

    if (language === "fa") {
      // Simple Persian date format without relying on locale
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year}/${month}/${day}`
    } else {
      // Use date-fns for English format
      return format(date, "PPP")
    }
  }

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

  // ساعت‌های قابل رزرو
  const availableTimes = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  // خدمات قابل رزرو
  const services = [
    { id: "measurement", name: language === "fa" ? "اندازه‌گیری" : "Measurement" },
    { id: "fitting", name: language === "fa" ? "پرو" : "Fitting" },
    { id: "consultation", name: language === "fa" ? "مشاوره" : "Consultation" },
    { id: "alterations", name: language === "fa" ? "تغییرات" : "Alterations" },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] hero-pattern flex items-center">
        <div className="absolute inset-0 bg-gradient-to-l from-jade/90 to-jade/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("appointment.title")}</h1>
            <p className="text-xl text-gray-200">{t("appointment.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 md:py-24 bg-cream dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t("appointment.name")}</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-white dark:bg-gray-800"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t("appointment.phone")}</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            required
                            className="bg-white dark:bg-gray-800"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>{t("appointment.date")}</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? formatDate(date) : language === "fa" ? "انتخاب تاریخ" : "Select a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                // Remove locale prop to avoid errors
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <div className="space-y-2">
                          <Label>{t("appointment.time")}</Label>
                          <Select onValueChange={(value) => handleSelectChange("time", value)}>
                            <SelectTrigger className="bg-white dark:bg-gray-800">
                              <SelectValue placeholder={language === "fa" ? "انتخاب ساعت" : "Select a time"} />
                            </SelectTrigger>
                            <SelectContent>
                              {availableTimes.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("appointment.service")}</Label>
                        <Select onValueChange={(value) => handleSelectChange("service", value)}>
                          <SelectTrigger className="bg-white dark:bg-gray-800">
                            <SelectValue placeholder={language === "fa" ? "انتخاب خدمات" : "Select a service"} />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">{t("appointment.description")}</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={4}
                          className="bg-white dark:bg-gray-800"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-jade hover:bg-jade/90 text-white">
                        {t("appointment.submit")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="text-5xl text-gold mb-6">
                  <Check className="h-16 w-16 mx-auto" />
                </div>
                <h2 className="text-2xl font-bold text-jade dark:text-gold mb-4">{t("appointment.success")}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{t("appointment.success.text")}</p>

                {smsSent && (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-md p-4 mb-6">
                    <p className="text-green-800 dark:text-green-200">
                      {language === "fa"
                        ? `یک پیامک تأیید به شماره ${formData.phone} ارسال شد.`
                        : `A confirmation SMS has been sent to ${formData.phone}.`}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setSmsSent(false)
                    }}
                    className="bg-jade hover:bg-jade/90 text-white"
                  >
                    {language === "fa" ? "رزرو نوبت جدید" : "Book New Appointment"}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-jade text-jade hover:bg-jade hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-jade"
                  >
                    <Link href="/">{language === "fa" ? "بازگشت به صفحه اصلی" : "Return to Home"}</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Available Times */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jade dark:text-gold mb-4">
              {language === "fa" ? "ساعات کاری" : "Business Hours"}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "fa" ? "ساعات کاری ما برای رزرو نوبت" : "Our business hours for appointments"}
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-cream dark:bg-jade/50 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-jade dark:text-gold mb-6 text-center">
                  {language === "fa" ? "ساعات عادی" : "Regular Hours"}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    <span className="font-medium">{language === "fa" ? "شنبه" : "Saturday"}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    <span className="font-medium">{language === "fa" ? "یکشنبه" : "Sunday"}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    <span className="font-medium">{language === "fa" ? "دوشنبه" : "Monday"}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    <span className="font-medium">{language === "fa" ? "سه‌شنبه" : "Tuesday"}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    <span className="font-medium">{language === "fa" ? "چهارشنبه" : "Wednesday"}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                    <span className="font-medium">{language === "fa" ? "پنجشنبه" : "Thursday"}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{language === "fa" ? "جمعه" : "Friday"}</span>
                    <span className="text-red-500">{language === "fa" ? "تعطیل" : "Closed"}</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-jade text-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gold mb-6 text-center">
                  {language === "fa" ? "اطلاعات نوبت‌دهی" : "Appointment Information"}
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">{language === "fa" ? "مدت زمان نوبت" : "Appointment Duration"}</h4>
                    <p className="text-gray-300">
                      {language === "fa"
                        ? "مشاوره‌های اولیه و جلسات اندازه‌گیری معمولاً ۴۵-۶۰ دقیقه طول می‌کشد."
                        : "Initial consultations and fittings typically last 45-60 minutes."}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "fa" ? "سیاست لغو" : "Cancellation Policy"}</h4>
                    <p className="text-gray-300">
                      {language === "fa"
                        ? "لطفاً در صورت نیاز به تغییر یا لغو نوبت، حداقل ۲۴ ساعت قبل اطلاع دهید."
                        : "Please provide at least 24 hours notice if you need to reschedule or cancel your appointment."}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{language === "fa" ? "چه چیزی همراه بیاورید" : "What to Bring"}</h4>
                    <p className="text-gray-300">
                      {language === "fa"
                        ? "برای تغییرات، لطفاً لباس را همراه بیاورید. برای سفارش‌های جدید، تصاویر مرجع از سبک‌هایی که دوست دارید مفید است."
                        : "For alterations, please bring the garment. For new orders, reference images of styles you like are helpful."}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
