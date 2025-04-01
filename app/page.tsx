import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="bg-brand-black text-brand-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh]">
        <Image
          src="/img/bears.JPG"
          alt="Nick Allen Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">NICK ALLEN STUDIO</h1>
          <button className="px-6 py-2 bg-brand-white text-brand-black rounded hover:bg-brand-gray transition">
            Contact me
          </button>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="py-16 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-white">ABOUT ME</h2>
        <p className="text-brand-gray text-sm md:text-base leading-relaxed">
          British-born designer and creative director.  
          I bring world-class design experience having worked with top creative teams and studios internationally for the past two decades.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="pb-24 px-6 md:px-16">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">PROJECTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProjectCard title="CARGO" img="/img/cargo.png" />
          <ProjectCard title="WhIsBe Vandalz" img="/img/7days.png" />
          <ProjectCard title="Shoper" img="/img/johnie.png" />
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-brand-gray rounded hover:bg-brand-white hover:text-brand-black transition">
            Load More
          </button>
        </div>
      </section>
    </main>
  )
}

type ProjectCardProps = {
  title: string
  img: string
}

function ProjectCard({ title, img }: ProjectCardProps) {
  return (
    <div className="overflow-hidden">
      <div className="aspect-[4/5] relative mb-2">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <p className="text-sm text-center text-brand-white">{title}</p>
    </div>
  )
}