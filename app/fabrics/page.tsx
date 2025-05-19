"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function FabricsPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedFabric, setSelectedFabric] = useState<any>(null)
  const [fabricAmount, setFabricAmount] = useState<string>("2")
  const [fabricModel, setFabricModel] = useState<string>("")

  const categories = [
    { id: "all", name: t("fabrics.all") },
    { id: "wool", name: t("fabrics.wool") },
    { id: "cotton", name: t("fabrics.cotton") },
    { id: "linen", name: t("fabrics.linen") },
    { id: "silk", name: t("fabrics.silk") },
    { id: "traditional", name: t("fabrics.traditional") },
  ]

  const models = [
    { id: "suit", name: language === "fa" ? "کت و شلوار" : "Suit" },
    { id: "shirt", name: language === "fa" ? "پیراهن" : "Shirt" },
    { id: "pants", name: language === "fa" ? "شلوار" : "Pants" },
    { id: "traditional", name: language === "fa" ? "لباس سنتی" : "Traditional" },
  ]

  const fabrics = [
    {
      id: 1,
      name: language === "fa" ? "پشم مرینوس آبی سرمه‌ای" : "Navy Blue Merino Wool",
      category: "wool",
      description:
        language === "fa"
          ? "پارچه پشمی با کیفیت عالی، مناسب برای کت و شلوار رسمی و نیمه رسمی."
          : "High-quality wool fabric, suitable for formal and semi-formal suits.",
      origin: language === "fa" ? "ایتالیا" : "Italy",
      weight: "280g",
      price: language === "fa" ? "۴,۵۰۰ افغانی / متر" : "4,500 AFN / meter",
      image: "/placeholder.svg?height=800&width=600&text=Merino+Wool",
    },
    {
      id: 2,
      name: language === "fa" ? "پنبه مصری راه راه" : "Egyptian Striped Cotton",
      category: "cotton",
      description:
        language === "fa"
          ? "پارچه پنبه‌ای با کیفیت عالی، مناسب برای پیراهن‌های رسمی و غیر رسمی."
          : "High-quality cotton fabric, suitable for formal and casual shirts.",
      origin: language === "fa" ? "مصر" : "Egypt",
      weight: "120g",
      price: language === "fa" ? "۲,۸۰۰ افغانی / متر" : "2,800 AFN / meter",
      image: "/placeholder.svg?height=800&width=600&text=Egyptian+Cotton",
    },
    {
      id: 3,
      name: language === "fa" ? "کتان ایرلندی کرم" : "Cream Irish Linen",
      category: "linen",
      description:
        language === "fa"
          ? "پارچه کتان با کیفیت عالی، مناسب برای کت و شلوار تابستانی و غیر رسمی."
          : "High-quality linen fabric, suitable for summer and casual suits.",
      origin: language === "fa" ? "ایرلند" : "Ireland",
      weight: "200g",
      price: language === "fa" ? "۳,۲۰۰ افغانی / متر" : "3,200 AFN / meter",
      image: "/placeholder.svg?height=800&width=600&text=Irish+Linen",
    },
    {
      id: 4,
      name: language === "fa" ? "ابریشم خالص چینی" : "Pure Chinese Silk",
      category: "silk",
      description:
        language === "fa"
          ? "پارچه ابریشمی با کیفیت عالی، مناسب برای لباس‌های مجلسی و رسمی."
          : "High-quality silk fabric, suitable for formal and ceremonial attire.",
      origin: language === "fa" ? "چین" : "China",
      weight: "90g",
      price: language === "fa" ? "۶,۵۰۰ افغانی / متر" : "6,500 AFN / meter",
      image: "/placeholder.svg?height=800&width=600&text=Chinese+Silk",
    },
    {
      id: 5,
      name: language === "fa" ? "پارچه سنتی افغانی" : "Traditional Afghan Fabric",
      category: "traditional",
      description:
        language === "fa"
          ? "پارچه سنتی افغانی با طرح‌های زیبا، مناسب برای لباس‌های سنتی و محلی."
          : "Traditional Afghan fabric with beautiful patterns, suitable for traditional and local clothing.",
      origin: language === "fa" ? "افغانستان" : "Afghanistan",
      weight: "180g",
      price: language === "fa" ? "۳,۸۰۰ افغانی / متر" : "3,800 AFN / meter",
      image: "/placeholder.svg?height=800&width=600&text=Afghan+Traditional",
    },
    {
      id: 6,
      name: language === "fa" ? "پشم کشمیر" : "Cashmere Wool",
      category: "wool",
      description:
        language === "fa"
          ? "پارچه پشمی کشمیر با کیفیت عالی، مناسب برای کت و پالتو."
          : "High-quality cashmere wool fabric, suitable for coats and jackets.",
      origin: language === "fa" ? "هند" : "India",
      weight: "300g",
      price: language === "fa" ? "۷,۲۰۰ افغانی / متر" : "7,200 AFN / meter",
      image: "/placeholder.svg?height=800&width=600&text=Cashmere",
    },
  ]

  const filteredFabrics =
    selectedCategory === "all" ? fabrics : fabrics.filter((fabric) => fabric.category === selectedCategory)

  const handleWhatsAppOrder = (fabric: any) => {
    const message =
      language === "fa"
        ? `سلام، من می‌خواهم پارچه "${fabric.name}" را سفارش دهم.\nمدل: ${fabricModel || "انتخاب نشده"}\nمتراژ: ${fabricAmount} متر\nلطفاً اطلاعات بیشتری در مورد موجودی و نحوه سفارش به من بدهید.`
        : `Hello, I would like to order the "${fabric.name}" fabric.\nModel: ${fabricModel || "Not selected"}\nAmount: ${fabricAmount} meters\nPlease provide more information about availability and how to order.`

    window.open(`https://wa.me/93791234567?text=${encodeURIComponent(message)}`, "_blank")
  }

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("fabrics.page.title")}</h1>
            <p className="text-xl text-gray-200">{t("fabrics.page.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Fabrics */}
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

          {/* Fabrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFabrics.map((fabric, index) => (
              <motion.div
                key={fabric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full fabric-card overflow-hidden">
                  <div className="relative h-64 cursor-pointer" onClick={() => setSelectedFabric(fabric)}>
                    <Image src={fabric.image || "/placeholder.svg"} alt={fabric.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-jade dark:text-gold mb-2">{fabric.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{fabric.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>
                        {language === "fa" ? "منشأ:" : "Origin:"} {fabric.origin}
                      </span>
                      <span>
                        {language === "fa" ? "وزن:" : "Weight:"} {fabric.weight}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-jade dark:text-gold">{fabric.price}</span>
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => setSelectedFabric(fabric)}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {t("fabrics.order")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Detail Modal */}
      {selectedFabric && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-80 md:h-full">
                <Image
                  src={selectedFabric.image || "/placeholder.svg"}
                  alt={selectedFabric.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-jade dark:text-gold mb-4">{selectedFabric.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedFabric.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600 dark:text-gray-400">
                      {language === "fa" ? "منشأ:" : "Origin:"}
                    </span>
                    <span>{selectedFabric.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600 dark:text-gray-400">
                      {language === "fa" ? "وزن:" : "Weight:"}
                    </span>
                    <span>{selectedFabric.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600 dark:text-gray-400">
                      {language === "fa" ? "قیمت:" : "Price:"}
                    </span>
                    <span className="font-bold text-jade dark:text-gold">{selectedFabric.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="model">{t("fabrics.select.model")}</Label>
                    <Select onValueChange={setFabricModel}>
                      <SelectTrigger id="model">
                        <SelectValue placeholder={t("fabrics.select.model")} />
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
                  <div>
                    <Label htmlFor="amount">{t("fabrics.select.amount")}</Label>
                    <div className="flex items-center">
                      <Input
                        id="amount"
                        type="number"
                        min="1"
                        value={fabricAmount}
                        onChange={(e) => setFabricAmount(e.target.value)}
                        className="flex-1"
                      />
                      <span className="ml-2">{t("fabrics.meter")}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white flex-1"
                    onClick={() => handleWhatsAppOrder(selectedFabric)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t("fabrics.order")}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedFabric(null)} className="flex-1">
                    {language === "fa" ? "بستن" : "Close"}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
