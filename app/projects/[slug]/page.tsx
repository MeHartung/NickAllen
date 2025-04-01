import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Image from 'next/image'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="pt-32 px-6 md:px-16 text-brand-white bg-brand-black min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold mb-12">{project.title}</h1>

      <div className="relative aspect-[16/9] mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="max-w-2xl text-brand-gray">{project.description}</p>
    </main>
  )
}