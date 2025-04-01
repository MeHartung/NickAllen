export default function ContactPage() {
    return (
      <main className="pt-32 px-6 md:px-16 text-brand-white bg-brand-black min-h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let’s connect</h1>
        <p className="text-brand-gray mb-12 max-w-xl mx-auto">
          Drop a message to collaborate, commission a custom website, or just say hello.
        </p>
        <a
          href="mailto:hello@hartungstudio.de"
          className="inline-block px-6 py-3 text-sm rounded-full bg-white text-black hover:bg-brand-gray transition"
        >
          hello@hartungstudio.de
        </a>
      </main>
    )
  }
  