"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function TestimonialsPage() {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Karimi",
      location: "Herat, Afghanistan",
      rating: 5,
      text: "Noor Ahmad created the most beautiful wedding suit for me. The attention to detail and the quality of craftsmanship was exceptional. I received countless compliments on my special day.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Mahmood Rahimi",
      location: "Kabul, Afghanistan",
      rating: 5,
      text: "I've been a client of Tailor Noor Ahmad for over 10 years. His work is consistently excellent, and the fit is always perfect. I wouldn't trust anyone else with my suits.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Farhad Ahmadi",
      location: "Mazar-i-Sharif, Afghanistan",
      rating: 5,
      text: "The traditional Afghan attire I ordered was beautifully crafted with intricate details. The quality of the fabric and the craftsmanship exceeded my expectations.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Najib Hakimi",
      location: "Herat, Afghanistan",
      rating: 5,
      text: "I needed a suit for an important business meeting and Noor Ahmad delivered a perfect garment in record time. The fit was impeccable and the quality outstanding.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Sayed Hashimi",
      location: "Kandahar, Afghanistan",
      rating: 5,
      text: "The alterations done on my existing suits were perfect. They now fit better than when I first bought them. Excellent service and very reasonable prices.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "Hamid Noori",
      location: "Herat, Afghanistan",
      rating: 5,
      text: "I ordered a traditional chapan for a cultural event, and it was absolutely stunning. The craftsmanship and attention to detail were remarkable. I will definitely be a returning customer.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] hero-pattern flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-darkblue/90 to-darkblue/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("testimonials.title")}</h1>
            <p className="text-xl text-gray-200">{t("testimonials.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full testimonial-card">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-darkblue">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Hear directly from our satisfied clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={`/placeholder.svg?height=800&width=1200&text=VideoTestimonial${item}`}
                  alt={`Video testimonial ${item}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold/80 flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Read about how our tailoring services have made a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=1000&width=800&text=SuccessStory"
                alt="Client success story"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-darkblue mb-4">"The Perfect Wedding Attire"</h3>
              <p className="text-lg text-gray-700 mb-6">
                When I was preparing for my wedding, I wanted something that would honor my Afghan heritage while also
                feeling modern and elegant. Tailor Noor Ahmad Soleimani created a stunning traditional wedding outfit
                with contemporary touches that exceeded all my expectations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The attention to detail in the embroidery and the perfect fit made me feel confident and proud on my
                special day. My family was amazed by the quality and craftsmanship, and I've since recommended Noor
                Ahmad to all my friends and family.
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-darkblue">Rashid Ahmadi</h4>
                  <p className="text-gray-600">Herat, Afghanistan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-darkblue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gold mb-6">Join Our Satisfied Clients</h2>
            <p className="text-lg text-gray-300 mb-8">
              Experience the exceptional tailoring services that have earned us these glowing testimonials.
            </p>
            <Button asChild className="bg-gold hover:bg-gold/90 text-darkblue font-bold px-8 py-6 text-lg">
              <Link href="/appointment">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
