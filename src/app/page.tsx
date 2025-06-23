'use client'
import Image from 'next/image'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

function ContactItem({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode
  label: string
  value: string
  link: string
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 hover:bg-white p-3 rounded-lg border border-gray-200 transition shadow-sm"
    >
      <div className="text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-text-main">{value}</p>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-background text-center flex flex-col justify-center items-center px-6"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-text-main mb-4"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Yoel Amadeo Pratomo
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-text-subtle max-w-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Software Architect & Fullstack Developer. Passionate in clean architecture & smart solutions.
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Tombol Lihat Proyek */}
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Lihat Proyek
          </a>

          {/* Tombol Download CV */}
          <a
            href="/cv/yoel-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            <FiDownload className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedWrapper>
        <section id="about" className="py-4 px-4 bg-background">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <Image
              src="/images/yoel.jpg"
              alt="Yoel Amadeo"
              width={240} // 60 x 4 = 240
              height={240}
              className="rounded-full object-cover shadow-lg"
              priority
            />
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-3xl font-bold mb-4 text-text-main">Tentang Saya</h2>
              <p className="text-text-subtle mb-6 leading-relaxed">
                Saya adalah mahasiswa semester 6 di FILKOM UB yang aktif dalam pengembangan sistem perangkat lunak dan machine learning. Fokus saya saat ini pada software architecture, kolaborasi tim, dan pengembangan aplikasi real-world.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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
          </div>
        </section>
      </AnimatedWrapper>

      {/* Portfolio Section */}
      <AnimatedWrapper>
        <section id="portfolio" className="py-24 px-4 bg-background">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-text-main">Proyek Portofolio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Sistem Konsultasi Medis',
                  desc: 'Aplikasi web konsultasi jarak jauh dokter-pasien, dibuat bersama FK UB.',
                  link: 'https://github.com/yoelamadeo/medconsult',
                },
                {
                  title: 'FinMate',
                  desc: 'Aplikasi pencatat keuangan berbasis prediksi & visualisasi, fokus literasi finansial.',
                  link: 'https://github.com/yoelamadeo/finmate',
                },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 border border-border rounded-2xl shadow-sm hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-text-main mb-2">{proj.title}</h3>
                  <p className="text-text-subtle mb-4">{proj.desc}</p>
                  <a
                    href={proj.link}
                    className="text-primary font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
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
        <section id="contact" className="py-24 px-4 bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Gambar / Ilustrasi */}
            <div className="flex justify-center">
              <Image
                src="/images/contact.svg"
                alt="Contact Illustration"
                width={500}
                height={500}
                className="w-full max-w-sm h-auto"
                priority
              />
            </div>

            {/* Kontak */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-text-main">Hubungi Saya</h2>
              <p className="text-text-subtle mb-8">
                Saya terbuka untuk diskusi, kolaborasi proyek, atau pertanyaan seputar teknologi.
              </p>

              <div className="space-y-6">
                <ContactItem
                  icon={<FaEnvelope className="text-indigo-600" />}
                  label="Email"
                  value="yamadeo9@gmail.com"
                  link="mailto:yamadeo9@gmail.com"
                />
                <ContactItem
                  icon={<FaGithub className="text-indigo-600" />}
                  label="GitHub"
                  value="yoelamadeo"
                  link="https://github.com/yoelamadeo"
                />
                <ContactItem
                  icon={<FaLinkedin className="text-indigo-600" />}
                  label="LinkedIn"
                  value="yoelamadeo"
                  link="https://linkedin.com/in/yoelamadeo"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedWrapper>
    </main>
  )
}
