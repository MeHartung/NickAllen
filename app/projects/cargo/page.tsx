// app/projects/cargo/page.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  '/img/cargo1.jpg',
  '/img/cargo2.jpg',
  '/img/cargo3.jpg',
  '/img/cargo4.jpg',
  '/img/cargo5.jpg',
  '/img/cargo6.jpg',
  '/img/cargo7.jpg',
]

export default function CargoProjectPage() {
  return (
    <main className="bg-white text-black px-6 md:px-16 pt-32 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Text */}
        <div className="text-sm leading-relaxed">
          <h1 className="text-lg font-semibold uppercase mb-6">CARGO</h1>
          <p className="mb-6">
            Logo and brand identity for CARGO, an independent non-profit initiative led by leading Black Creatives
            along with support from musicians Massive Attack. Its aim is to to address the balance of accessible
            narratives from the African diaspora. Providing audio visual resources for teachers and parents to delivering
            a future full of pride and possibility.
          </p>
          <p className="mb-4 whitespace-pre-line">
            Charting
            <br />African
            <br />Resilience
            <br />Generating
            <br />Opportunities
          </p>
          <p className="mt-6 mb-2 font-semibold">Role</p>
          <p className="mb-4">Design Direction</p>
          <p className="text-sm text-gray-600">
            In collaboration <a href="https://www.cargocollective.com" target="_blank" rel="noopener noreferrer" className="underline">www.cargocollective.com</a>
          </p>
        </div>

        {/* Right: First image */}
        <div className="relative w-full h-full aspect-[4/5]">
          <Image
            src={images[0]}
            alt="CARGO Preview"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-16 max-w-6xl mx-auto space-y-10">
        {images.slice(1).map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative w-full h-auto"
          >
            <Image
              src={src}
              alt={`CARGO Image ${i + 2}`}
              width={1600}
              height={1000}
              className="w-full h-auto object-cover rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </main>
  )
}
