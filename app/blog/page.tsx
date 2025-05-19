"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function BlogPage() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Bespoke Tailoring",
      excerpt:
        "Discover the intricate process behind creating a truly custom garment and why bespoke tailoring stands apart from off-the-rack options.",
      date: "May 15, 2023",
      author: "Noor Ahmad Soleimani",
      category: "Craftsmanship",
      image: "/placeholder.svg?height=800&width=1200&text=TailoringArt",
    },
    {
      id: 2,
      title: "Traditional Afghan Attire: A Cultural Heritage",
      excerpt:
        "Explore the rich history and significance of traditional Afghan clothing and how modern tailoring preserves these cultural treasures.",
      date: "April 22, 2023",
      author: "Ahmad Soleimani",
      category: "Culture",
      image: "/placeholder.svg?height=800&width=1200&text=AfghanAttire",
    },
    {
      id: 3,
      title: "Choosing the Perfect Fabric for Your Suit",
      excerpt:
        "A comprehensive guide to understanding different fabric types, weights, and patterns to help you select the ideal material for your custom suit.",
      date: "March 10, 2023",
      author: "Mahmood Rahimi",
      category: "Tips",
      image: "/placeholder.svg?height=800&width=1200&text=FabricGuide",
    },
    {
      id: 4,
      title: "Wedding Attire: Blending Tradition with Modern Elegance",
      excerpt:
        "How to create the perfect wedding outfit that honors cultural traditions while incorporating contemporary design elements.",
      date: "February 28, 2023",
      author: "Noor Ahmad Soleimani",
      category: "Wedding",
      image: "/placeholder.svg?height=800&width=1200&text=WeddingAttire",
    },
    {
      id: 5,
      title: "The Perfect Fit: Understanding Suit Measurements",
      excerpt:
        "Learn about the key measurements that make a suit fit perfectly and how professional tailors ensure your garment fits like a glove.",
      date: "January 15, 2023",
      author: "Ahmad Soleimani",
      category: "Tips",
      image: "/placeholder.svg?height=800&width=1200&text=PerfectFit",
    },
    {
      id: 6,
      title: "Caring for Your Custom Garments",
      excerpt:
        "Essential tips for maintaining and extending the life of your bespoke clothing, from proper storage to cleaning methods.",
      date: "December 5, 2022",
      author: "Noor Ahmad Soleimani",
      category: "Tips",
      image: "/placeholder.svg?height=800&width=1200&text=GarmentCare",
    },
  ]

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="text-3xl font-playfair-display font-bold text-center mb-8">{t("blog.title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div className="relative w-full h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm">
                        {t("blog.readMore")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
