'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact me' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHideOnScroll(currentScrollY > lastScrollY && currentScrollY > 80)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
      hideOnScroll ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="relative flex items-center justify-between px-4 md:px-8 py-2">

        {/* Avatar */}
        <Link href="/" className="shrink-0 w-9 h-9 relative rounded-full overflow-hidden border border-white/10">
  <Image
    src="/img/avatar.jpg"
    alt="Avatar"
    fill
    className="object-cover"
  />
</Link>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex h-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          items-center gap-4 px-4 rounded-full bg-brand-black/70 text-brand-white
          backdrop-blur-md border border-white/10 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group text-sm text-brand-white px-3 py-2 transition"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-brand-gray transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Burger menu (mobile) */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/20 bg-brand-black/60 text-white backdrop-blur-md shadow-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 w-48 bg-brand-black text-brand-white rounded-lg shadow-xl border border-white/10 p-4 space-y-3 z-50"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm hover:text-brand-gray transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}