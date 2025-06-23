'use client'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.img
          src="/images/yoel.jpg"
          alt="Yoel Amadeo"
          className="w-32 h-32 rounded-full mb-6 shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Yoel Amadeo Pratomo
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Software Architect & Fullstack Developer
        </motion.p>
        <a
          href="#portfolio"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Lihat Proyek Saya
        </a>
      </section>

      {/* About Section */}
      <AnimatedWrapper>
        <section id="about" className="py-24 bg-gray-50 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Saya adalah mahasiswa semester 6 di FILKOM UB dengan ketertarikan pada pengembangan web, software architecture, dan AI. Aktif di berbagai proyek dan organisasi, saya percaya kolaborasi lintas disiplin adalah kunci inovasi.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'Vue.js', 'Golang', 'Tailwind CSS', 'Python', 'TensorFlow'].map((skill) => (
                <span
                  key={skill}
                  className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      {/* Portfolio Section */}
      <AnimatedWrapper>
        <section id="portfolio" className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Proyek Portofolio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Sistem Konsultasi Medis',
                  desc: 'Aplikasi web untuk konsultasi dokter-pasien jarak jauh. Kolaborasi dengan FK UB.',
                  link: 'https://github.com/yoelamadeo/medconsult',
                },
                {
                  title: 'FinMate',
                  desc: 'Pencatatan keuangan personal dengan fitur prediksi & visualisasi data.',
                  link: 'https://github.com/yoelamadeo/finmate',
                },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 border rounded-2xl shadow-md text-left"
                >
                  <h3 className="text-xl font-semibold">{proj.title}</h3>
                  <p className="text-gray-600 my-3">{proj.desc}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    Lihat Proyek →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      {/* Contact Section */}
      <AnimatedWrapper>
        <section id="contact" className="py-24 bg-gray-50 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Hubungi Saya</h2>
            <p className="text-gray-700 mb-6">Tertarik bekerja sama atau berdiskusi?</p>
            <ul className="space-y-3 text-left text-sm font-medium">
              <li>Email: <a href="mailto:yamadeo9@gmail.com" className="text-indigo-600">yamadeo9@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/yoelamadeo" className="text-indigo-600">yoelamadeo</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/yoelamadeo" className="text-indigo-600">yoelamadeo</a></li>
            </ul>
          </div>
        </section>
      </AnimatedWrapper>
    </main>
  )
}
