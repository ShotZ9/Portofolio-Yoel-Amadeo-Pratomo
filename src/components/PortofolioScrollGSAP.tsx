'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion'

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

export default function PortfolioScrollGSAP() {
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
          x: `-${50 * (projects.length - 2)}vw`, // scroll sebanyak total card - 1
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: `+=${projects.length * 600}`, // panjang scroll
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
    <section id="portfolio" className="relative bg-background z-1">
      <div ref={triggerRef} className="overflow-hidden">
        <div
          ref={sectionRef}
          className="flex h-screen items-center px-8 box-border"
          style={{
            width: `calc(${projects.length} * 40vw)`, // total lebar = jumlah projek * 90vw
          }}
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
  )
}
