'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects as allProjects } from '@/data/projects'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-brand-white text-brand-black">

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] overflow-hidden">
  {/* YouTube Video Background — Desktop Only */}
  <iframe
    src="https://www.youtube.com/embed/oByDcLFqfOU?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=oByDcLFqfOU"
    className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
    allow="autoplay; fullscreen"
    allowFullScreen
    title="Nick Allen Studio"
  />

  {/* YouTube Video Background — Mobile Only */}
  <iframe
  src="https://www.youtube.com/embed/bzc9JqMSZjM?autoplay=1&mute=1&controls=0&loop=1&playlist=bzc9JqMSZjM&modestbranding=1&rel=0"
  className="block md:hidden absolute top-0 left-0 w-full h-full pointer-events-none"
  allow="autoplay; fullscreen"
  allowFullScreen
  title="Nick Allen Studio Mobile"
/>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-10" />

  {/* Content */}
  <div className="absolute inset-0 flex items-end justify-between px-6 md:px-16 pb-12 z-20">
    <h1 className="text-3xl md:text-5xl font-semibold text-white">
      NICK ALLEN STUDIO
    </h1>
    <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-100 transition">
      Contact me
    </button>
  </div>
</section>

      {/* ABOUT ME */}
      <section className="py-12 px-6 md:px-16 text-left">
        <div className="max-w-[700px]">
          <h2 className="text-sm font-medium tracking-wide text-brand-gray uppercase mb-4">
            About Nick Allen
          </h2>
          <p className="text-xs md:text-sm text-brand-gray leading-relaxed mb-4">
            British-born designer and creative director, Nick brings world-class design experience
            having worked with top creative teams and brands internationally for the past few decades.
          </p>
          <p className="text-xs md:text-sm text-brand-gray leading-relaxed">
            Trusted by 72andSunny Amsterdam, Mother London, BBDO, Exposure and Landor Associates —
            for clients including Coca-Cola, CARGO, Johnnie Walker, QBE, Uber, Levi’s®, Channel 4,
            Sky and the BBC.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="pb-24 px-6 md:px-16">
        <h3 className="text-sm font-medium tracking-wide text-brand-gray uppercase mb-6">
          Projects
        </h3>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="break-inside-avoid rounded overflow-hidden"
            >
              <Link href={project.href}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-md hover:opacity-90 transition"
                />
                <p className="mt-2 text-xs text-brand-gray">{project.title}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}