// ---------- app/page.tsx ----------
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  { title: 'WhIsBe Vandalz', image: '/img/7days.png', href: '/projects/whisbe' },
  { title: 'The People\'s Platform', image: '/img/bears.JPG', href: '/projects/platform' },
  { title: 'CARGO', image: '/img/cargo.png', href: '/projects/cargo' },
  { title: 'Johnnie Walker', image: '/img/johnie.png', href: '/projects/johnnie' },
  { title: 'Sky/NBC', image: '/img/avatar.jpg', href: '/projects/sky' },
]

export default function HomePage() {
  return (
    <main className="px-6 md:px-16 pt-32 pb-20 bg-brand-black text-brand-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-16">Nick Allen Studio</h1>

      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid rounded overflow-hidden shadow-lg"
          >
            <Link href={project.href}>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg hover:opacity-90 transition"
              />
              <div className="mt-2 text-sm opacity-80">{project.title}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}