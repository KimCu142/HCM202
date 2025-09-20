import heroImage from '../assets/placeholder-landscape.svg'

const highlights = [
  {
    title: 'Constitutional Legacy',
    description:
      'Ho Chi Minh grounded the revolutionary state in the sovereignty of the people, laying foundations for modern constitutionalism.',
  },
  {
    title: 'Democratic Participation',
    description:
      'Institutions must grow from popular will, ensuring every citizen can contribute to national decisions.',
  },
  {
    title: 'People-Centred Governance',
    description:
      'Public servants carry the duty of protecting livelihoods, justice, and cultural identity for all Vietnamese people.',
  },
]

const Home = () => {
  return (
    <section id="home" className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="overflow-hidden rounded-3xl bg-paper-texture shadow-xl ring-1 ring-[#d6c2a4]">
          <div className="grid gap-10 bg-gradient-to-br from-white/85 via-parchment/90 to-primary/10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-14">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Historical Narrative</p>
              <h2 className="text-4xl font-semibold leading-tight text-midnight md:text-5xl">
                Ho Chi Minh&apos;s Vision for a State of the People, by the People, for the People
              </h2>
              <blockquote className="border-l-4 border-primary/40 pl-4 text-lg italic text-midnight/80">
                “Our regime is the regime of the people, by the people and for the people.” — Ho Chi Minh, 1945
              </blockquote>
              <p className="text-base leading-relaxed text-midnight/80">
                Explore the historical evolution of democratic thought in Vietnam. This exhibit traces the ideological
                pillars that shaped the modern Vietnamese state and highlights their application across decades of
                nation-building.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#ideology"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-light"
                >
                  Discover the Ideology
                </a>
                <a
                  href="#practice"
                  className="inline-flex items-center justify-center rounded-full border border-primary/60 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
                >
                  Applications in Today&apos;s Vietnam
                </a>
              </div>
            </div>

            <figure className="relative flex items-center justify-center">
              <div className="absolute inset-6 rounded-3xl border border-primary/20" aria-hidden />
              <img
                src={heroImage}
                alt="Placeholder for archival photograph illustrating democratic gatherings"
                className="relative z-10 w-full max-w-lg rounded-2xl shadow-lg"
              />
              <figcaption className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-center text-xs font-medium text-midnight/70 shadow">
                Replace with archival image: independence speeches, National Assembly, or civic participation scenes.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white/90 p-6 shadow-sm ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-3">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-midnight/80">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
