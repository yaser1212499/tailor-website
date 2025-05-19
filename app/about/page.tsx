"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t, language } = useLanguage()

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("about.title")}</h1>
            <p className="text-xl text-gray-200">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-cream dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=1000&width=800&text=Master+Tailor"
                alt="Master Tailor"
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
              <h2 className="text-3xl font-bold text-jade dark:text-gold mb-6">{t("about.history")}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {language === "fa"
                  ? "خیاطی نوراحمد سلیمانی از سال ۱۳۶۴ تاسیس شده و بیش از سه دهه به مردم هرات و فراتر از آن خدمات خیاطی استثنایی ارائه می‌دهد."
                  : "Established in 1985, Tailor Noor Ahmad Soleimani has been serving the people of Herat and beyond with exceptional tailoring services for over three decades."}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {language === "fa"
                  ? "استاد نوراحمد سلیمانی سفر خود را در سن ۱۵ سالگی به عنوان شاگرد آغاز کرد و هنر پیچیده خیاطی را از استادان ماهر در هرات آموخت. پس از سال‌ها تکمیل مهارت‌های خود، در سال ۱۳۶۴ مغازه خیاطی خود را تأسیس کرد که از آن زمان به یکی از معتبرترین مؤسسات در منطقه تبدیل شده است."
                  : "Master Noor Ahmad Soleimani began his journey at the age of 15 as an apprentice, learning the intricate art of tailoring from skilled masters in Herat. After years of perfecting his skills, he established his own tailoring shop in 1985, which has since become one of the most reputable establishments in the region."}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {language === "fa"
                  ? "امروز، خیاطی نوراحمد سلیمانی همچنان به حفظ سنت‌های خیاطی ظریف ادامه می‌دهد و در عین حال تکنیک‌ها و سبک‌های مدرن را به کار می‌گیرد و لباس‌هایی می‌سازد که هم بی‌زمان و هم معاصر هستند."
                  : "Today, Tailor Noor Ahmad Soleimani continues to preserve the traditions of fine tailoring while also incorporating modern techniques and styles, creating garments that are both timeless and contemporary."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jade dark:text-gold mb-4">
              {language === "fa" ? "ارزش‌های ما" : "Our Values"}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "fa"
                ? "اصولی که کار ما را هدایت می‌کند و تعهد ما به برتری را تعریف می‌کند."
                : "The principles that guide our work and define our commitment to excellence."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: language === "fa" ? "کیفیت" : "Quality",
                desc:
                  language === "fa"
                    ? "ما فقط از بهترین مواد استفاده می‌کنیم و تکنیک‌های دقیق را به کار می‌گیریم تا اطمینان حاصل کنیم که هر لباس استانداردهای بالای ما را برآورده می‌کند."
                    : "We use only the finest materials and employ precise techniques to ensure that each garment meets our high standards.",
              },
              {
                title: language === "fa" ? "سنت" : "Tradition",
                desc:
                  language === "fa"
                    ? "ما میراث غنی خیاطی افغانی را گرامی می‌داریم و در عین حال عناصر معاصر را برای جذابیت بی‌زمان ترکیب می‌کنیم."
                    : "We honor the rich heritage of Afghan tailoring while incorporating contemporary elements for timeless appeal.",
              },
              {
                title: language === "fa" ? "صداقت" : "Integrity",
                desc:
                  language === "fa"
                    ? "ما به قیمت‌گذاری صادقانه، ارتباط شفاف و عمل به وعده‌های خود برای ایجاد روابط پایدار اعتقاد داریم."
                    : "We believe in honest pricing, transparent communication, and keeping our promises to build lasting relationships.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream dark:bg-jade/50 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-jade dark:text-gold mb-4">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-16 md:py-24 bg-jade text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gold mb-6">{t("about.craftsmanship")}</h2>
              <p className="text-lg text-gray-300 mb-6">
                {language === "fa"
                  ? "ما تکنیک‌های خیاطی سنتی افغانی را با سبک‌های مدرن ترکیب می‌کنیم تا لباس‌هایی بسازیم که هم بی‌زمان و هم معاصر هستند."
                  : "We combine traditional Afghan tailoring techniques with modern styles to create garments that are both timeless and contemporary."}
              </p>
              <p className="text-lg text-gray-300 mb-6">
                {language === "fa"
                  ? "هر لباس با مشاوره کامل برای درک نیازها و ترجیحات مشتری آغاز می‌شود. سپس اندازه‌گیری‌های دقیق انجام می‌دهیم تا از تناسب کامل اطمینان حاصل کنیم. استادان خیاط ما پارچه را با دقت برش می‌دهند و هر قطعه را با توجه دقیق به جزئیات مونتاژ می‌کنند."
                  : "Each garment begins with a thorough consultation to understand the customer's needs and preferences. We then take precise measurements to ensure a perfect fit. Our master tailors carefully cut the fabric and assemble each piece with meticulous attention to detail."}
              </p>
              <p className="text-lg text-gray-300">
                {language === "fa"
                  ? "دوخت دستی برای اجزای حیاتی به کار می‌رود تا دوام و پایان پالایش شده تضمین شود. در طول فرآیند، پرو‌های متعددی انجام می‌شود تا تنظیمات لازم انجام شود و رضایت کامل مشتری تضمین شود."
                  : "Hand stitching is employed for vital components to ensure durability and a refined finish. Throughout the process, multiple fittings are conducted to make necessary adjustments and ensure complete customer satisfaction."}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative h-60 rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=600&width=400&text=Craftsmanship+${item}`}
                    alt={`Craftsmanship ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 md:py-24 bg-cream dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jade dark:text-gold mb-4">{t("about.experience")}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "fa"
                ? "با بیش از ۳۵ سال در این صنعت، ما صنعت خود را کامل کرده‌ایم و شهرتی برای برتری ساخته‌ایم."
                : "With over 35 years in the industry, we have perfected our craft and built a reputation for excellence."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "+35", label: language === "fa" ? "سال تجربه" : "Years of Experience" },
              { number: "+5000", label: language === "fa" ? "مشتری راضی" : "Satisfied Customers" },
              { number: "+10000", label: language === "fa" ? "لباس دوخته شده" : "Garments Created" },
              { number: "+100", label: language === "fa" ? "لباس عروسی در سال" : "Wedding Attires per Year" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-lg text-jade dark:text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jade dark:text-gold mb-4">{t("about.team")}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {language === "fa"
                ? "صنعتگران ماهر پشت لباس‌های استثنایی ما."
                : "The skilled craftsmen behind our exceptional garments."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: language === "fa" ? "نوراحمد سلیمانی" : "Noor Ahmad Soleimani",
                role: language === "fa" ? "استاد خیاط و بنیانگذار" : "Master Tailor & Founder",
              },
              {
                name: language === "fa" ? "احمد سلیمانی" : "Ahmad Soleimani",
                role: language === "fa" ? "خیاط ارشد" : "Senior Tailor",
              },
              {
                name: language === "fa" ? "محمود رحیمی" : "Mahmood Rahimi",
                role: language === "fa" ? "الگوساز" : "Pattern Maker",
              },
              {
                name: language === "fa" ? "فرهاد احمدی" : "Farhad Ahmadi",
                role: language === "fa" ? "خیاط کارآموز" : "Apprentice Tailor",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/placeholder.svg?height=800&width=600&text=Team+${index + 1}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-jade dark:text-gold mb-1">{member.name}</h3>
                <p className="text-gray-700 dark:text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
