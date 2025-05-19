"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function GalleryPage() {
  const { t, language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: language === "fa" ? "همه" : "All" },
    { id: "suits", name: language === "fa" ? "کت و شلوار" : "Suits" },
    { id: "wedding", name: language === "fa" ? "لباس عروسی" : "Wedding" },
    { id: "traditional", name: language === "fa" ? "لباس سنتی" : "Traditional" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "suits",
      image: "/placeholder.svg?height=800&width=600&text=Suit+1",
      title: language === "fa" ? "کت و شلوار کلاسیک" : "Classic Suit",
    },
    {
      id: 2,
      category: "suits",
      image: "/placeholder.svg?height=800&width=600&text=Suit+2",
      title: language === "fa" ? "کت و شلوار مدرن" : "Modern Suit",
    },
    {
      id: 3,
      category: "wedding",
      image: "/placeholder.svg?height=800&width=600&text=Wedding+1",
      title: language === "fa" ? "کت و شلوار دامادی" : "Groom's Suit",
    },
    {
      id: 4,
      category: "wedding",
      image: "/placeholder.svg?height=800&width=600&text=Wedding+2",
      title: language === "fa" ? "لباس عروسی سنتی" : "Traditional Wedding Attire",
    },
    {
      id: 5,
      category: "traditional",
      image: "/placeholder.svg?height=800&width=600&text=Traditional+1",
      title: language === "fa" ? "چپن افغانی" : "Afghan Chapan",
    },
    {
      id: 6,
      category: "traditional",
      image: "/placeholder.svg?height=800&width=600&text=Traditional+2",
      title: language === "fa" ? "پیراهن تنبان" : "Perahan Tunban",
    },
    {
      id: 7,
      category: "suits",
      image: "/placeholder.svg?height=800&width=600&text=Suit+3",
      title: language === "fa" ? "کت و شلوار تجاری" : "Business Suit",
    },
    {
      id: 8,
      category: "suits",
      image: "/placeholder.svg?height=800&width=600&text=Suit+4",
      title: language === "fa" ? "کت و شلوار تابستانی" : "Summer Suit",
    },
    {
      id: 9,
      category: "wedding",
      image: "/placeholder.svg?height=800&width=600&text=Wedding+3",
      title: language === "fa" ? "کت عروسی" : "Wedding Coat",
    },
    {
      id: 10,
      category: "traditional",
      image: "/placeholder.svg?height=800&width=600&text=Traditional+3",
      title: language === "fa" ? "جلیقه سنتی" : "Traditional Vest",
    },
    {
      id: 11,
      category: "suits",
      image: "/placeholder.svg?height=800&width=600&text=Suit+5",
      title: language === "fa" ? "کت شلوار مجلسی" : "Formal Suit",
    },
    {
      id: 12,
      category: "traditional",
      image: "/placeholder.svg?height=800&width=600&text=Traditional+4",
      title: language === "fa" ? "کلاه سنتی" : "Traditional Hat",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("gallery.title")}</h1>
            <p className="text-xl text-gray-200">{t("gallery.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-cream dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={
                  selectedCategory === category.id
                    ? "bg-jade text-white"
                    : "border-jade text-jade hover:bg-jade hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-jade"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="gallery-image overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4 bg-white dark:bg-jade/50">
                  <h3 className="text-jade dark:text-gold font-medium">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full h-[80vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 z-10 text-white hover:text-gold"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">{language === "fa" ? "بستن" : "Close"}</span>
            </Button>
            <div className="relative w-full h-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-jade text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold mb-6">
              {language === "fa" ? "می‌خواهید سفارش دهید؟" : "Ready to Order?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {language === "fa"
                ? "همین امروز سفارش خود را ثبت کنید و بگذارید لباسی بسازیم که کاملاً متناسب با سبک و شخصیت شما باشد."
                : "Place your order today and let us create a garment that perfectly matches your style and personality."}
            </p>
            <Button asChild className="bg-gold hover:bg-gold/90 text-jade font-bold px-8 py-6 text-lg">
              <Link href="/order">{t("order.title")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
