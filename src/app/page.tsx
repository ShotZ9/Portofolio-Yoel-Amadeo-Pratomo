'use client'
import Image from 'next/image'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import HeroCanvas from '@/components/HeroCanvas'
import FadeUpSection from '@/components/FadeUpSection'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function ContactItem({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 hover:bg-[#313131] p-3 rounded-lg border border-gray-200 transition shadow-sm"
    >
      <div className="text-xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-medium text-text-main">{value}</p>
      </div>
    </a>
  )
}

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Sistem Konsultasi Medis',
    desc: 'Aplikasi web konsultasi jarak jauh antara dokter dan pasien, bekerja sama dengan Fakultas Kedokteran UB.',
    link: 'https://github.com/pH7-Simpl/bloodpressure-prototype',
  },
  {
    title: 'CV. Agroindo Cipta Sejahtera',
    desc: 'Website company profile profesional untuk perusahaan agribisnis, dilengkapi fitur produk, kontak, dan informasi layanan.',
    link: 'https://github.com/LagMad/AgroIndo',
  },
  {
    title: 'Website GKI Batu',
    desc: 'Website jemaat GKI Batu berbasis Next.js dengan tampilan modern dan interaktif, menampilkan jadwal ibadah, artikel, serta galeri foto.',
    link: 'https://github.com/ShotZ9/trialgkibatu',
  },
  {
    title: 'Website GKI Summercamp',
    desc: 'Website event Summercamp GKI dengan sistem pengumpulan dana online dan informasi kegiatan, dikembangkan menggunakan Next.js dan Supabase.',
    link: 'https://github.com/ShotZ9/gkisummercamp',
  },
  {
    title: 'FinMate',
    desc: 'Aplikasi pencatat keuangan cerdas berbasis machine learning, dirancang untuk meningkatkan literasi finansial generasi muda.',
    link: 'https://github.com/ShotZ9/capstone-project-CC25-CF295',
  },
]

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = sectionRef.current
      if (!el) return

      gsap.fromTo(
        el,
        { x: '0%' },
        {
          x: `-${50 * (projects.length - 2)}vw`,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: `+=${projects.length * 600}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])
  return (
    <main className='relative overflow-hidden'>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <HeroCanvas />
      </motion.div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-background text-center flex flex-col justify-center items-center"
      >
        {/* Canvas Partikel */}

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-text-main mb-4 z-10"
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
            className="inline-flex text-center items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition z-10"
          >
            Lihat Proyek
          </a>

          {/* Tombol Download CV */}
          <a
            href="/cv/yoel-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition z-10"
          >
            <FiDownload className="w-5 h-5" />
            Download CV
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedWrapper>
        <section id="about" className="bg-background">
          <FadeUpSection>
            <div className="min-h-screen bg-background text-center flex flex-col justify-center items-center mx-auto flex flex-col md:flex-row items-center gap-10">
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
                  Saya merupakan mahasiswa semester 7 di FILKOM UB yang aktif dalam pengembangan sistem perangkat lunak dan machine learning. Fokus utama saya meliputi <em>software architecture</em>, kolaborasi tim, pengembangan aplikasi dunia nyata, serta <em>human resources development</em>.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['Next.js', 'Vue.js', 'PHP', 'Golang', 'Tailwind CSS', 'Python', 'TensorFlow'].map((skill) => (
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
          </FadeUpSection>
        </section>
      </AnimatedWrapper>

      {/* Portfolio Section */}
      <AnimatedWrapper>
        <section id="portfolio" className="relative">
          <div ref={triggerRef} className="overflow-hidden">
            <div
              ref={sectionRef}
              className="flex h-screen items-center px-8 box-border"
              style={{ width: `calc(${projects.length} * 40vw)` }}
            >
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="min-w-[90vw] md:min-w-[20vw] mx-2 bg-background border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center box-border"
                >                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-md"
                  >
                    <h2 className="text-2xl font-semibold text-text-main mb-3">{proj.title}</h2>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedWrapper>

      {/* Contact Section */}
      <AnimatedWrapper>
        <section id="contact" className="py-24 px-4 bg-background">
          <FadeUpSection>
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
              <div className="text-center md:text-left z-20">
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
                    value="ShotZ9"
                    link="https://github.com/ShotZ9"
                  />
                  <ContactItem
                    icon={<FaLinkedin className="text-indigo-600" />}
                    label="LinkedIn"
                    value="yoelamadeop"
                    link="https://www.linkedin.com/in/yoelamadeop/"
                  />
                  <ContactItem
                    icon={<FaInstagram className="text-indigo-600" />}
                    label="Instagram"
                    value="@yomadeo04"
                    link="https://www.instagram.com/yomadeo04/"
                  />
                </div>
              </div>
            </div>
          </FadeUpSection>
        </section>
      </AnimatedWrapper>
    </main>
  )
}
