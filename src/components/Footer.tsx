'use client'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-20 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Navigation + Copyright */}
        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold text-gray-800">© {new Date().getFullYear()} Yoel Amadeo Pratomo</p>
          <nav className="flex gap-4 justify-center md:justify-start">
            <Link href="#home" className="hover:text-indigo-600">Home</Link>
            <Link href="#about" className="hover:text-indigo-600">Tentang</Link>
            <Link href="#portfolio" className="hover:text-indigo-600">Portofolio</Link>
            <Link href="#contact" className="hover:text-indigo-600">Kontak</Link>
          </nav>
        </div>

        {/* Right: Sosial Media */}
        <div className="flex gap-5 text-lg">
          <a
            href="mailto:yamadeo9@gmail.com"
            className="hover:text-indigo-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yoelamadeo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yoelamadeo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
