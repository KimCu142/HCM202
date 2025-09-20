import iconPeople from '../assets/icon-people.svg'
import iconService from '../assets/icon-service.svg'
import iconVote from '../assets/icon-vote.svg'
import portraitPlaceholder from '../assets/placeholder-portrait.svg'

const ideologySections = [
  {
    title: 'Of the people',
    description:
      'All power belongs to the people. They are the root of legitimacy and the source of every mandate entrusted to the state.',
    image: iconPeople,
    photoCaption: 'Insert imagery of citizens participating in the August Revolution or early elections.',
  },
  {
    title: 'By the people',
    description:
      'The people elect representative institutions that act on their behalf. Leaders must be close to the masses and accountable to them.',
    image: iconVote,
    photoCaption: 'Replace with photographs of National Assembly sessions or ballot activities.',
  },
  {
    title: 'For the people',
    description:
      'The state must protect rights, promote development, and ensure that every policy benefits the people first.',
    image: iconService,
    photoCaption: 'Showcase social welfare programs or scenes of cadres serving the community.',
  },
]

const supportingPoints = [
  'Grassroots democracy regulations institutionalise citizen oversight and dialogue.',
  'Public ethics emphasise thrift, integrity, and dedication in service.',
  'Rule-of-law principles align revolutionary ideals with modern governance tools.',
]

const Ideology = () => {
  return (
    <section id="ideology" className="bg-parchment/80 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <header className="max-w-4xl space-y-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Ideological Foundations</p>
          <h2 className="text-4xl font-semibold md:text-5xl">State Power Rooted in the People</h2>
          <p className="text-base leading-relaxed text-midnight/80">
            Ho Chi Minh united traditional patriotism with Marxist-Leninist theory. The resulting model of governance
            is holistic: power originates from the people, is exercised by their representatives, and must serve their
            wellbeing.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          {ideologySections.map((section) => (
            <article
              key={section.title}
              className="flex flex-col gap-6 rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-primary/10"
            >
              <div className="flex items-center gap-4">
                <img src={section.image} alt={`${section.title} icon`} className="h-14 w-14" loading="lazy" />
                <h3 className="text-2xl font-semibold text-primary">{section.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-midnight/80">{section.description}</p>
              <figure className="relative w-full overflow-hidden rounded-2xl border border-primary/10 bg-parchment/60">
                <img
                  src={portraitPlaceholder}
                  alt={`Placeholder for ${section.title.toLowerCase()} historical image`}
                  className="w-full object-cover"
                />
                <figcaption className="absolute bottom-3 left-1/2 w-[85%] -translate-x-1/2 rounded-lg bg-white/85 px-3 py-2 text-center text-xs text-midnight/70 shadow">
                  {section.photoCaption}
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

        <aside className="grid gap-6 rounded-3xl bg-white/70 p-8 shadow-md ring-1 ring-primary/10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-primary">Supporting Values</h3>
            <p className="text-sm leading-relaxed text-midnight/80">
              When preparing exhibits or assignments, expand these points with quotations, statistics, and case studies
              from your sources. Use the space on the right to add additional imagery or archival documents.
            </p>
          </div>
          <ul className="grid gap-4 text-sm text-midnight/80">
            {supportingPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-primary/10 bg-parchment/60 px-5 py-4">
                {point}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Ideology
