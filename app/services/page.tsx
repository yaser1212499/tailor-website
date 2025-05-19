"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Ruler, MessageCircle, Shirt } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function ServicesPage() {
  const { t, language } = useLanguage()

  const services = [
    {
      id: 1,
      title: "کت و شلوار سفارشی",
      description: "کت و شلوار سفارشی متناسب با اندازه‌های دقیق و سلیقه‌های سبک شما.",
      longDescription:
        "کت و شلوارهای سفارشی ما متناسب با اندازه‌های دقیق و ترجیحات سبک شما دوخته می‌شوند. ما مجموعه گسترده‌ای از پارچه‌های با کیفیت از کارخانه‌های معتبر در سراسر جهان ارائه می‌دهیم. هر کت و شلوار با تکنیک‌های سنتی و دقت مدرن ساخته می‌شود تا تناسب کامل و کیفیت استثنایی تضمین شود.",
      icon: <Scissors className="h-10 w-10 text-gold" />,
      image: "/placeholder.svg?height=800&width=600&text=کت+و+شلوار+سفارشی",
    },
    {
      id: 2,
      title: "لباس عروسی",
      description: "کت و شلوار عروسی شیک و لباس‌های سنتی عروسی افغانی برای روز خاص شما.",
      longDescription:
        "روز خاص خود را با لباس عروسی سفارشی ما حتی به یادماندنی‌تر کنید. از کت و شلوارهای عروسی شیک گرفته تا لباس‌های سنتی عروسی افغانی، ما قطعاتی می‌سازیم که میراث شما را گرامی می‌دارند و در عین حال اطمینان می‌دهند که بهترین ظاهر را داشته باشید. ما توجه ویژه‌ای به جزئیات و تزئیناتی داریم که لباس عروسی شما را واقعاً منحصر به فرد می‌کند.",
      icon: <Shirt className="h-10 w-10 text-gold" />,
      image: "/placeholder.svg?height=800&width=600&text=لباس+عروسی",
    },
    {
      id: 3,
      title: "تغییرات",
      description: "تغییرات حرفه‌ای برای اطمینان از اینکه لباس‌های شما کاملاً متناسب هستند.",
      longDescription:
        "خدمات تغییرات حرفه‌ای ما اطمینان می‌دهد که لباس‌های شما کاملاً متناسب هستند. چه نیاز به تنظیم کت و شلواری داشته باشید که در جای دیگری خریداری کرده‌اید یا می‌خواهید قطعه‌ای ارزشمند در کمد لباس خود را اصلاح کنید، خیاطان ماهر ما می‌توانند تغییرات دقیقی انجام دهند و در عین حال یکپارچگی طرح اصلی را حفظ کنند.",
      icon: <MessageCircle className="h-10 w-10 text-gold" />,
      image: "/placeholder.svg?height=800&width=600&text=تغییرات",
    },
    {
      id: 4,
      title: "لباس‌های سنتی",
      description: "لباس‌های سنتی اصیل افغانی ساخته شده با بهترین مواد.",
      longDescription:
        "ما به حفظ میراث فرهنگی افغانستان از طریق لباس‌های سنتی خود افتخار می‌کنیم. مجموعه ما شامل چپن افغانی اصیل، پیراهن تنبان و سایر لباس‌های سنتی است که با بهترین مواد ساخته شده و با گلدوزی‌های سنتی و جزئیاتی تزئین شده‌اند که میراث فرهنگی غنی ما را جشن می‌گیرند.",
      icon: <Ruler className="h-10 w-10 text-gold" />,
      image: "/placeholder.svg?height=800&width=600&text=لباس+سنتی",
    },
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">خدمات ما</h1>
            <p className="text-xl text-gray-200">خیاطی شده به کمال</p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-cream dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-darkblue dark:text-gold mb-4">خدمات خیاطی ما</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                مجموعه‌ای از خدمات خیاطی ممتاز ما را کشف کنید که برای برآوردن هر نیاز شما طراحی شده است.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full overflow-hidden service-card rounded-2xl">
                  <div className="relative h-64">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-bold text-darkblue dark:text-gold mr-4">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{service.longDescription}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button asChild className="btn-darkblue dark:btn-gold">
                        <Link href="/order">سفارش این خدمت</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-darkblue/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-darkblue dark:text-gold mb-4">فرآیند خیاطی ما</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                از مشاوره تا پرو نهایی، ما تجربه‌ای بی‌نقص را تضمین می‌کنیم.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "۰۱",
                title: "مشاوره",
                desc: "ما درباره نیازها، ترجیحات و سبک شما بحث می‌کنیم تا چشم‌انداز شما را درک کنیم.",
              },
              {
                step: "۰۲",
                title: "اندازه‌گیری",
                desc: "ما اندازه‌گیری‌های دقیقی انجام می‌دهیم تا از تناسب کامل لباس شما اطمینان حاصل کنیم.",
              },
              {
                step: "۰۳",
                title: "ساخت",
                desc: "خیاطان ماهر ما با توجه به هر جزئیات، لباس شما را با دقت می‌سازند.",
              },
              {
                step: "۰۴",
                title: "پرو",
                desc: "ما یک پرو نهایی انجام می‌دهیم تا هرگونه تنظیم لازم برای تناسب کامل را انجام دهیم.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center p-6 border-b-2 border-gold"
              >
                <div className="text-4xl font-bold text-gold mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-darkblue dark:text-gold mb-2">{process.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics */}
      <section className="py-16 md:py-24 bg-darkblue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gold mb-4">پارچه‌های ممتاز</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                ما بهترین پارچه‌ها را از سراسر جهان تهیه می‌کنیم تا لباس‌هایی با کیفیت استثنایی بسازیم.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative h-40 rounded-2xl overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=400&width=300&text=پارچه+${item}`}
                  alt={`نمونه پارچه ${item}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="btn-gold">
                <Link href="/fabrics">مشاهده همه پارچه‌ها</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-cream dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-darkblue dark:text-gold mb-4">قیمت‌های ما</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                قیمت‌گذاری شفاف برای خدمات خیاطی ممتاز ما.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "کت و شلوار سفارشی",
                price: "شروع از ۱۵,۰۰۰ افغانی",
                features: [
                  "انتخاب پارچه ممتاز",
                  "ساختار کامل کنواس",
                  "جزئیات دست‌دوز",
                  "دو جلسه پرو",
                  "آماده در ۳-۴ هفته",
                ],
              },
              {
                title: "لباس عروسی",
                price: "شروع از ۲۰,۰۰۰ افغانی",
                features: [
                  "گزینه‌های پارچه لوکس",
                  "تزئینات سفارشی",
                  "طرح‌های سنتی یا مدرن",
                  "چندین جلسه پرو",
                  "آماده در ۴-۶ هفته",
                ],
              },
              {
                title: "تغییرات",
                price: "شروع از ۲,۰۰۰ افغانی",
                features: ["تنظیمات حرفه‌ای", "زمان تحویل سریع", "حفظ طرح اصلی", "یک جلسه پرو", "آماده در ۱-۲ هفته"],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-darkblue/50 p-8 rounded-2xl shadow-gold"
              >
                <h3 className="text-xl font-bold text-darkblue dark:text-gold mb-2">{plan.title}</h3>
                <div className="text-2xl font-bold text-gold mb-6">{plan.price}</div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-gold ml-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild className="w-full btn-darkblue dark:btn-gold">
                    <Link href="/order">سفارش</Link>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-darkblue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gold mb-6">آماده تجربه خیاطی ممتاز هستید؟</h2>
              <p className="text-lg text-gray-300 mb-8">
                همین امروز سفارش خود را ثبت کنید و بگذارید لباسی بسازیم که کاملاً متناسب با سبک و شخصیت شما باشد.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="btn-gold font-bold px-8 py-6 text-lg">
                  <Link href="/order">ثبت سفارش</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
