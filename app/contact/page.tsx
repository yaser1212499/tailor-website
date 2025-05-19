"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setSubmitted(true)
  }

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("contact.title")}</h1>
            <p className="text-xl text-gray-200">{t("contact.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-darkblue rounded-full">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-darkblue mb-2">{t("contact.address")}</h3>
              <p className="text-gray-700">123 Herat Street, Herat, Afghanistan</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-darkblue rounded-full">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-darkblue mb-2">{t("contact.phone")}</h3>
              <p className="text-gray-700">+93 79 123 4567</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-darkblue rounded-full">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-darkblue mb-2">{t("contact.email")}</h3>
              <p className="text-gray-700">info@tailornoorahmad.af</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-darkblue rounded-full">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-darkblue mb-2">{t("contact.hours")}</h3>
              <p className="text-gray-700">Sat-Thu: 9AM - 6PM</p>
              <p className="text-gray-700">Friday: Closed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkblue mb-6">Send Us a Message</h2>
              {!submitted ? (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact.form.name")}</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.form.email")}</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">{t("contact.form.message")}</Label>
                        <Textarea id="message" rows={5} required />
                      </div>
                      <Button type="submit" className="w-full bg-darkblue hover:bg-darkblue/90 text-white">
                        {t("contact.form.submit")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <div className="bg-cream p-8 rounded-lg shadow-md text-center">
                  <div className="text-5xl text-gold mb-6">✓</div>
                  <h3 className="text-2xl font-bold text-darkblue mb-4">Message Sent!</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Thank you for contacting Tailor Noor Ahmad Soleimani. We will get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setSubmitted(false)} className="bg-darkblue hover:bg-darkblue/90 text-white">
                    Send Another Message
                  </Button>
                </div>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-darkblue mb-6">Find Us</h2>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106629.53310076275!2d62.1346627!3d34.3489075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce6e583d8a9b9%3A0x6d1062e0d204f005!2sHerat%2C%20Afghanistan!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Map of Tailor Noor Ahmad Soleimani location"
                ></iframe>
              </div>
              <div>
                <h3 className="text-xl font-bold text-darkblue mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="p-3 bg-darkblue rounded-full text-gold hover:bg-gold hover:text-darkblue transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="p-3 bg-darkblue rounded-full text-gold hover:bg-gold hover:text-darkblue transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="p-3 bg-darkblue rounded-full text-gold hover:bg-gold hover:text-darkblue transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to make a custom suit?",
                  answer:
                    "A custom suit typically takes 3-4 weeks to complete, including multiple fittings to ensure the perfect fit.",
                },
                {
                  question: "Do you offer rush services?",
                  answer:
                    "Yes, we offer rush services for an additional fee. Please contact us directly to discuss your timeline and requirements.",
                },
                {
                  question: "What should I bring to my first appointment?",
                  answer:
                    "For your first appointment, it's helpful to bring reference images of styles you like. If you're having alterations done, please bring the garment with you.",
                },
                {
                  question: "Do you ship internationally?",
                  answer:
                    "Yes, we can ship completed garments internationally. Shipping costs and timelines vary depending on the destination.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept cash, credit cards, and bank transfers. For custom orders, we typically require a 50% deposit to begin work.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-bold text-darkblue mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
