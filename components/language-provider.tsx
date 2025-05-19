"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "fa" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "rtl" | "ltr"
}

const translations = {
  fa: {
    // هدر
    home: "خانه",
    about: "درباره ما",
    services: "خدمات",
    gallery: "گالری",
    fabrics: "تکه‌ها",
    order: "سفارش",
    appointment: "نوبت‌دهی",
    contact: "تماس با ما",

    // صفحه اصلی
    "hero.title": "خیاطی نوراحمد سلیمانی",
    "hero.subtitle": "خیاطی سفارشی با بیش از ۳۵ سال تجربه",
    "hero.cta": "سفارش آنلاین",
    "intro.title": "به خیاطی نوراحمد سلیمانی خوش آمدید",
    "intro.text":
      "با بیش از ۳۵ سال تجربه، ما لباس‌های سفارشی می‌سازیم که صنعت سنتی افغانی را با ظرافت مدرن ترکیب می‌کند. هر قطعه با دقت و به صورت دستی ساخته می‌شود.",
    "services.title": "خدمات ما",
    "services.subtitle": "خدمات خیاطی حرفه‌ای",
    "services.custom": "کت و شلوار سفارشی",
    "services.wedding": "لباس عروسی",
    "services.traditional": "لباس‌های سنتی",
    "services.alterations": "تغییرات",
    "gallery.title": "گالری",
    "gallery.subtitle": "نمونه کارهای ما",
    "fabrics.title": "تکه‌ها",
    "fabrics.subtitle": "پارچه‌های با کیفیت",
    "cta.title": "آماده سفارش هستید؟",
    "cta.text": "همین امروز سفارش خود را ثبت کنید",
    "cta.button": "سفارش آنلاین",

    // صفحه درباره ما
    "about.title": "درباره ما",
    "about.subtitle": "داستان خیاطی نوراحمد سلیمانی",
    "about.history": "تاریخچه",
    "about.experience": "تجربه",
    "about.craftsmanship": "صنعتگری",
    "about.team": "تیم ما",

    // صفحه خدمات
    "services.page.title": "خدمات ما",
    "services.page.subtitle": "خدمات خیاطی حرفه‌ای",
    "services.custom.title": "کت و شلوار سفارشی",
    "services.custom.desc": "کت و شلوار سفارشی متناسب با اندازه‌های دقیق و سلیقه‌های سبک شما.",
    "services.wedding.title": "لباس عروسی",
    "services.wedding.desc": "کت و شلوار عروسی شیک و لباس‌های سنتی عروسی افغانی برای روز خاص شما.",
    "services.traditional.title": "لباس‌های سنتی",
    "services.traditional.desc": "لباس‌های سنتی اصیل افغانی ساخته شده با بهترین مواد.",
    "services.alterations.title": "تغییرات",
    "services.alterations.desc": "تغییرات حرفه‌ای برای اطمینان از اینکه لباس‌های شما کاملاً متناسب هستند.",

    // صفحه تکه‌ها
    "fabrics.page.title": "تکه‌ها",
    "fabrics.page.subtitle": "پارچه‌های با کیفیت",
    "fabrics.all": "همه",
    "fabrics.wool": "پشمی",
    "fabrics.cotton": "پنبه‌ای",
    "fabrics.linen": "کتان",
    "fabrics.silk": "ابریشمی",
    "fabrics.traditional": "سنتی",
    "fabrics.order": "سفارش",
    "fabrics.meter": "متر",
    "fabrics.select.model": "انتخاب مدل",
    "fabrics.select.amount": "متراژ",

    // صفحه سفارش
    "order.title": "سفارش آنلاین",
    "order.subtitle": "فرم سفارش",
    "order.name": "نام و نام خانوادگی",
    "order.phone": "شماره تماس",
    "order.type": "نوع لباس",
    "order.fabric": "انتخاب پارچه",
    "order.model": "مدل",
    "order.amount": "متراژ",
    "order.description": "توضیحات",
    "order.submit": "ثبت سفارش",
    "order.whatsapp": "ارسال به واتساپ",
    "order.success": "سفارش شما با موفقیت ثبت شد",
    "order.success.text": "با تشکر از سفارش شما. ما به زودی با شما تماس خواهیم گرفت.",

    // صفحه نوبت‌دهی
    "appointment.title": "نوبت‌دهی آنلاین",
    "appointment.subtitle": "رزرو وقت",
    "appointment.name": "نام و نام خانوادگی",
    "appointment.phone": "شماره تماس",
    "appointment.date": "تاریخ",
    "appointment.time": "ساعت",
    "appointment.service": "نوع خدمات",
    "appointment.description": "توضیحات",
    "appointment.submit": "ثبت نوبت",
    "appointment.success": "نوبت شما با موفقیت ثبت شد",
    "appointment.success.text": "با تشکر از رزرو شما. ما به زودی با شما تماس خواهیم گرفت.",

    // صفحه تماس با ما
    "contact.title": "تماس با ما",
    "contact.subtitle": "اطلاعات تماس",
    "contact.address": "آدرس",
    "contact.phone": "تلفن",
    "contact.email": "ایمیل",
    "contact.hours": "ساعات کاری",
    "contact.form.name": "نام شما",
    "contact.form.email": "ایمیل شما",
    "contact.form.message": "پیام شما",
    "contact.form.submit": "ارسال پیام",

    // فوتر
    "footer.rights": "تمامی حقوق محفوظ است",
    "footer.privacy": "حریم خصوصی",
    "footer.terms": "شرایط استفاده",

    // نوار ناوبری پایین
    "bottom.home": "خانه",
    "bottom.gallery": "گالری",
    "bottom.order": "سفارش",
    "bottom.appointment": "نوبت",
    "bottom.contact": "تماس",

    // ویجت واتساپ
    "whatsapp.title": "پیام به ما",
    "whatsapp.text": "برای مشاوره، سفارش یا هرگونه سوال با ما در واتساپ در تماس باشید.",
    "whatsapp.button": "گفتگو در واتساپ",
  },
  en: {
    // Header
    home: "Home",
    about: "About Us",
    services: "Services",
    gallery: "Gallery",
    fabrics: "Fabrics",
    order: "Order",
    appointment: "Appointment",
    contact: "Contact",

    // Home Page
    "hero.title": "Noor Ahmad Soleimani Tailoring",
    "hero.subtitle": "Custom Tailoring with Over 35 Years of Experience",
    "hero.cta": "Order Online",
    "intro.title": "Welcome to Noor Ahmad Soleimani Tailoring",
    "intro.text":
      "With over 35 years of experience, we create custom garments that blend traditional Afghan craftsmanship with modern elegance. Each piece is meticulously handcrafted to perfection.",
    "services.title": "Our Services",
    "services.subtitle": "Professional Tailoring Services",
    "services.custom": "Custom Suits",
    "services.wedding": "Wedding Attire",
    "services.traditional": "Traditional Clothing",
    "services.alterations": "Alterations",
    "gallery.title": "Gallery",
    "gallery.subtitle": "Our Work",
    "fabrics.title": "Fabrics",
    "fabrics.subtitle": "Quality Materials",
    "cta.title": "Ready to Order?",
    "cta.text": "Place your order today",
    "cta.button": "Order Online",

    // About Page
    "about.title": "About Us",
    "about.subtitle": "The Story of Noor Ahmad Soleimani Tailoring",
    "about.history": "History",
    "about.experience": "Experience",
    "about.craftsmanship": "Craftsmanship",
    "about.team": "Our Team",

    // Services Page
    "services.page.title": "Our Services",
    "services.page.subtitle": "Professional Tailoring Services",
    "services.custom.title": "Custom Suits",
    "services.custom.desc": "Bespoke suits tailored to your exact measurements and style preferences.",
    "services.wedding.title": "Wedding Attire",
    "services.wedding.desc": "Elegant wedding suits and traditional Afghan wedding attire for your special day.",
    "services.traditional.title": "Traditional Clothing",
    "services.traditional.desc": "Authentic Afghan traditional clothing made with the finest materials.",
    "services.alterations.title": "Alterations",
    "services.alterations.desc": "Professional alterations to ensure your garments fit perfectly.",

    // Fabrics Page
    "fabrics.page.title": "Fabrics",
    "fabrics.page.subtitle": "Quality Materials",
    "fabrics.all": "All",
    "fabrics.wool": "Wool",
    "fabrics.cotton": "Cotton",
    "fabrics.linen": "Linen",
    "fabrics.silk": "Silk",
    "fabrics.traditional": "Traditional",
    "fabrics.order": "Order",
    "fabrics.meter": "meters",
    "fabrics.select.model": "Select Model",
    "fabrics.select.amount": "Amount",

    // Order Page
    "order.title": "Online Order",
    "order.subtitle": "Order Form",
    "order.name": "Full Name",
    "order.phone": "Phone Number",
    "order.type": "Clothing Type",
    "order.fabric": "Fabric Selection",
    "order.model": "Model",
    "order.amount": "Amount",
    "order.description": "Description",
    "order.submit": "Submit Order",
    "order.whatsapp": "Send to WhatsApp",
    "order.success": "Your order has been successfully submitted",
    "order.success.text": "Thank you for your order. We will contact you soon.",

    // Appointment Page
    "appointment.title": "Online Appointment",
    "appointment.subtitle": "Book an Appointment",
    "appointment.name": "Full Name",
    "appointment.phone": "Phone Number",
    "appointment.date": "Date",
    "appointment.time": "Time",
    "appointment.service": "Service Type",
    "appointment.description": "Description",
    "appointment.submit": "Book Appointment",
    "appointment.success": "Your appointment has been successfully booked",
    "appointment.success.text": "Thank you for your booking. We will contact you soon.",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Contact Information",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Business Hours",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",

    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Bottom Navbar
    "bottom.home": "Home",
    "bottom.gallery": "Gallery",
    "bottom.order": "Order",
    "bottom.appointment": "Appt",
    "bottom.contact": "Contact",

    // WhatsApp Widget
    "whatsapp.title": "Message Us",
    "whatsapp.text": "For consultation, orders, or any questions, contact us on WhatsApp.",
    "whatsapp.button": "Chat on WhatsApp",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fa")
  const dir = language === "fa" ? "rtl" : "ltr"

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = language
  }, [language, dir])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div className={language === "fa" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
