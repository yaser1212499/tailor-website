"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors, Ruler, MessageCircle, Star, ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState, useRef } from "react"

export default function Home() {
  const { t, language } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const heroElement = heroRef.current
        const heroHeight = heroElement.offsetHeight
        const parallaxFactor = 0.4

        if (scrollY <= heroHeight) {
          heroElement.style.transform = `translateY(${scrollY * parallaxFactor}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Split text for animated title
  const heroTitle = t("hero.title")
  const heroTitleArray = heroTitle.split("")

  return (
    <div className="pt-24 md:pt-28 overflow-x-hidden">
      {/* Hero Section - Sophisticated & Creative */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 bg-noise">
          <div className="absolute inset-0 opacity-30 bg-gradient-radial from-copper-200 to-transparent dark:from-copper-900 dark:to-transparent"></div>
          <div className="decorative-circle w-96 h-96 top-20 -left-48"></div>
          <div className="decorative-circle w-64 h-64 bottom-20 -right-32"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-10 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center lg:text-left"
            >
              <div className="mb-4 inline-flex">
                <span className="tag tag-primary">{language === "fa" ? "خیاطی لوکس" : "Luxury Tailoring"}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">{t("hero.title")}</span>
              </h1>

              <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                {t("hero.subtitle")}
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button asChild className="btn-primary">
                  <Link href="/order">
                    {t("hero.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <Link href="https://wa.me/93791234567" target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-copper-200 dark:border-copper-800 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-copper-200 dark:border-copper-800 rounded-full"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <div className="absolute inset-0 bg-gradient-to-tr from-copper-500/20 to-transparent mix-blend-overlay z-10"></div>
                <Image
                  src="/placeholder.svg?height=1000&width=800&text=Master+Tailor"
                  alt="Master Tailor at work"
                  width={800}
                  height={1000}
                  priority
                  className="object-cover w-full h-[600px] img-optimize"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-elegant">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-copper-100 dark:bg-copper-900/30 flex items-center justify-center">
                    <Star className="h-5 w-5 text-copper-600 dark:text-copper-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {language === "fa" ? "بیش از ۳۵ سال تجربه" : "35+ Years of Experience"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="h-8 w-8 text-copper-500" />
        </div>
      </section>

      {/* Introduction Section - Sophisticated & Modern */}
      <section className="py-20 md:py-32 bg-texture relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-copper-200 dark:border-copper-800 rounded-full animate-spin opacity-20"></div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden h-48 shadow-elegant">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Detail+1"
                      alt="Tailoring detail"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden h-32 shadow-elegant">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Detail+2"
                      alt="Tailoring detail"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-xl overflow-hidden h-32 shadow-elegant">
                    <Image
                      src="/placeholder.svg?height=300&width=400&text=Detail+3"
                      alt="Tailoring detail"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden h-48 shadow-elegant">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Detail+4"
                      alt="Tailoring detail"
                      width={300}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex mb-4">
                <span className="tag tag-secondary">{language === "fa" ? "درباره ما" : "About Us"}</span>
              </div>
              <h2 className="section-title text-slate-900 dark:text-white">{t("intro.title")}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{t("intro.text")}</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-copper-100 dark:bg-copper-900/30 flex items-center justify-center mr-4 shrink-0">
                    <Scissors className="h-6 w-6 text-copper-600 dark:text-copper-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Precision</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Attention to detail in every stitch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-copper-100 dark:bg-copper-900/30 flex items-center justify-center mr-4 shrink-0">
                    <Ruler className="h-6 w-6 text-copper-600 dark:text-copper-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Perfect Fit</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Tailored to your exact measurements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-copper-100 dark:bg-copper-900/30 flex items-center justify-center mr-4 shrink-0">
                    <Star className="h-6 w-6 text-copper-600 dark:text-copper-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Quality</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Premium fabrics and materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-copper-100 dark:bg-copper-900/30 flex items-center justify-center mr-4 shrink-0">
                    <MessageCircle className="h-6 w-6 text-copper-600 dark:text-copper-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Consultation</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Expert guidance in selection</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="btn-primary group">
                  <Link href="/about">
                    {language === "fa" ? "بیشتر بدانید" : "Learn More"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview - Sophisticated Cards */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-copper-400 to-transparent"></div>
        <div className="decorative-circle w-96 h-96 -top-48 -right-48"></div>
        <div className="decorative-circle w-64 h-64 -bottom-32 -left-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex mb-4">
                <span className="tag tag-primary">{language === "fa" ? "خدمات ما" : "Our Services"}</span>
              </div>
              <h2 className="section-title text-slate-900 dark:text-white">{t("services.title")}</h2>
              <p className="section-subtitle">{t("services.subtitle")}</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t("services.custom"),
                desc: t("services.custom.desc"),
                icon: "👔",
              },
              {
                title: t("services.wedding"),
                desc: t("services.wedding.desc"),
                icon: "👰",
              },
              {
                title: t("services.alterations"),
                desc: t("services.alterations.desc"),
                icon: "✂️",
              },
              {
                title: t("services.traditional"),
                desc: t("services.traditional.desc"),
                icon: "👘",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card-luxury p-6 text-center group"
              >
                <div className="w-16 h-16 bg-copper-100 dark:bg-copper-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-copper-200 dark:group-hover:bg-copper-800/30 transition-colors">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm">{service.desc}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="text-copper-600 dark:text-copper-400 hover:text-copper-700 dark:hover:text-copper-300 hover:bg-copper-50 dark:hover:bg-copper-900/20 group"
                >
                  <Link href="/services">
                    {language === "fa" ? "مشاهده جزئیات" : "View Details"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview - Creative Grid */}
      <section className="py-20 md:py-32 bg-texture relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex mb-4">
                <span className="tag tag-secondary">{language === "fa" ? "گالری ما" : "Our Gallery"}</span>
              </div>
              <h2 className="section-title text-slate-900 dark:text-white">{t("gallery.title")}</h2>
              <p className="section-subtitle">{t("gallery.subtitle")}</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 relative h-80 rounded-xl overflow-hidden shadow-elegant group"
            >
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Featured+Work"
                alt="Featured work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 img-optimize"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {language === "fa" ? "کت و شلوار سفارشی" : "Custom Tailored Suit"}
                  </h3>
                  <p className="text-slate-200 text-sm">
                    {language === "fa" ? "ساخته شده با پارچه پشمی ایتالیایی" : "Made with Italian wool fabric"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 relative h-80 rounded-xl overflow-hidden shadow-elegant group"
            >
              <Image
                src="/placeholder.svg?height=600&width=400&text=Detail+Work"
                alt="Detail work"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 img-optimize"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {language === "fa" ? "جزئیات دوخت" : "Stitching Details"}
                  </h3>
                  <p className="text-slate-200 text-sm">
                    {language === "fa" ? "دوخت دستی با دقت بالا" : "Hand-stitched with precision"}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-6 md:col-span-4 relative h-64 rounded-xl overflow-hidden shadow-elegant group"
            >
              <Image
                src="/placeholder.svg?height=400&width=400&text=Traditional"
                alt="Traditional clothing"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 img-optimize"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-lg font-bold">
                    {language === "fa" ? "لباس سنتی" : "Traditional Attire"}
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-6 md:col-span-4 relative h-64 rounded-xl overflow-hidden shadow-elegant group"
            >
              <Image
                src="/placeholder.svg?height=400&width=400&text=Wedding"
                alt="Wedding attire"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 img-optimize"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-lg font-bold">
                    {language === "fa" ? "لباس عروسی" : "Wedding Attire"}
                  </h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 relative h-64 rounded-xl overflow-hidden shadow-elegant group"
            >
              <Image
                src="/placeholder.svg?height=400&width=400&text=Fabrics"
                alt="Fabric selection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 img-optimize"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white text-lg font-bold">
                    {language === "fa" ? "انتخاب پارچه" : "Fabric Selection"}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="btn-primary group">
              <Link href="/gallery">
                {t("gallery.title")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-copper-400 to-transparent"></div>
        <div className="decorative-circle w-96 h-96 -bottom-48 -right-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex mb-4">
                <span className="tag tag-primary">{language === "fa" ? "نظرات مشتریان" : "Testimonials"}</span>
              </div>
              <h2 className="section-title text-slate-900 dark:text-white">
                {language === "fa" ? "مشتریان ما چه می‌گویند" : "What Our Clients Say"}
              </h2>
              <p className="section-subtitle">
                {language === "fa"
                  ? "تجربیات واقعی مشتریان ما از خدمات خیاطی ما"
                  : "Real experiences from our clients about our tailoring services"}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury p-8 relative"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-copper"></div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-copper-500 fill-copper-500" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                  "
                  {language === "fa"
                    ? "خیاطی نوراحمد سلیمانی کیفیت و دقت فوق‌العاده‌ای دارد. من همیشه از نتیجه کار راضی بوده‌ام و به همه دوستانم توصیه می‌کنم."
                    : "Noor Ahmad Soleimani Tailoring offers exceptional quality and precision. I've always been satisfied with the results and recommend them to all my friends."}
                  "
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=Client+${item}`}
                      alt="Client"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {language === "fa" ? `مشتری ${item}` : `Client ${item}`}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {language === "fa" ? "هرات، افغانستان" : "Herat, Afghanistan"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Sophisticated Style */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-charcoal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-copper-500/10 animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-copper-500/5 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex mb-6">
                <span className="tag tag-secondary">{language === "fa" ? "سفارش آنلاین" : "Online Order"}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                <span className="text-gradient-alt">{t("cta.title")}</span>
              </h2>
              <p className="text-lg text-slate-300 mb-10">{t("cta.text")}</p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="btn-secondary group">
                  <Link href="/order">
                    {t("cta.button")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-copper-400 text-copper-400 hover:bg-copper-400/10"
                >
                  <Link href="/contact">{t("contact.title")}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
