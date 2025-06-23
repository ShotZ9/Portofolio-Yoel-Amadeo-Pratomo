'use client'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#portfolio', label: 'Portofolio' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold text-indigo-600">Yoel</div>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-indigo-600 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
