'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#portfolio', label: 'Portofolio' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Burger Button - TOP LEFT */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all"
        aria-label="Menu"
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Floating Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-20 left-6 z-40 bg-white border border-gray-200 rounded-xl shadow-xl p-4 space-y-3"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  if (item.href === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  } else {
                    const target = document.querySelector(item.href)
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                  setIsOpen(false)
                }}
                className="block text-gray-800 hover:text-indigo-600 transition font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
