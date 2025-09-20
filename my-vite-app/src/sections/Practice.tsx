import landscapePlaceholder from '../assets/placeholder-landscape.svg'

const practiceTimeline = [
  {
    year: '2013',
    title: 'Constitutional affirmation of popular sovereignty',
    description:
      'The 2013 Constitution codifies that the Socialist Republic of Vietnam is the state of the people, by the people, and for the people, with the National Assembly as the highest representative organ.',
    imageHint: 'Insert an image of the 2013 Constitution or the National Assembly building.',
  },
  {
    year: '2015–present',
    title: 'Administrative reform and digital government',
    description:
      'National administrative reform programs simplify procedures, expand online public services, and enhance transparency to better serve citizens and businesses.',
    imageHint: 'Add photos of one-stop service centres or digital government interfaces.',
  },
  {
    year: '2020–2030',
    title: 'Building a socialist rule-of-law state',
    description:
      'Party documents and state strategies emphasize strengthening the rule of law, judicial reforms, and the protection of human rights in accordance with Ho Chi Minh’s ideology.',
    imageHint: 'Consider using images from Party Congresses or legal reform workshops.',
  },
  {
    year: 'Ongoing',
    title: 'Grassroots democracy regulations',
    description:
      'Localities implement grassroots democracy regulations so people directly discuss, decide, and supervise socio-economic projects that affect their communities.',
    imageHint: 'Include community meeting photographs or participatory planning sessions.',
  },
]

const Practice = () => {
  return (
    <section id="practice" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <header className="space-y-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Contemporary Applications</p>
          <h2 className="text-4xl font-semibold md:text-5xl">Carrying the Ideals into Governance</h2>
          <p className="text-base leading-relaxed text-midnight/80 md:max-w-3xl">
            From the Constitution to grassroots initiatives, the Vietnamese state continuously refines democratic
            institutions to embody Ho Chi Minh&apos;s principles. Use the timeline to anchor narratives, and enrich it with
            images, quotes, or statistics that illustrate each milestone.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <ol className="relative space-y-10 border-l-2 border-primary/20 pl-8">
            {practiceTimeline.map((item) => (
              <li key={item.title} className="relative rounded-3xl bg-white/90 p-6 shadow-md ring-1 ring-primary/10">
                <span className="absolute -left-[1.125rem] top-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-parchment text-xs font-semibold text-primary">
                  {item.year === 'Ongoing' ? '•' : item.year.split('-')[0]}
                </span>
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.year}</p>
                  <h3 className="text-xl font-semibold text-midnight">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-midnight/80">{item.description}</p>
                  <figure className="rounded-2xl border border-primary/10 bg-parchment/60 p-3 text-xs text-midnight/70">
                    <div className="flex flex-col gap-2 text-center">
                      <span className="font-semibold text-primary/80">Image suggestion:</span>
                      <span>{item.imageHint}</span>
                    </div>
                  </figure>
                </div>
              </li>
            ))}
          </ol>

          <aside className="sticky top-32 hidden lg:flex flex-col gap-4 rounded-3xl bg-paper-texture p-6 shadow-xl ring-1 ring-[#d6c2a4]">
            <h3 className="text-2xl font-semibold text-primary">Visual Storytelling Area</h3>
            <p className="text-sm leading-relaxed text-midnight/80">
              Use this column to curate a collage of photographs, scanned documents, or infographics. Replace the
              placeholder image below with your own material to complement the timeline.
            </p>
            <figure className="overflow-hidden rounded-2xl border border-primary/20 bg-white/80">
              <img
                src={landscapePlaceholder}
                alt="Placeholder collage for contemporary applications"
                className="w-full"
              />
              <figcaption className="px-4 py-3 text-center text-xs text-midnight/70">
                Swap this placeholder with a gallery of today&apos;s administrative reforms, civic tech, or grassroots
                democracy in action.
              </figcaption>
            </figure>
          </aside>
        </div>

        <div className="rounded-3xl bg-primary/10 p-6 text-sm leading-relaxed text-midnight/80 shadow-inner">
          <strong className="text-primary">Tip:</strong> Incorporate interviews, policy excerpts, or local news to
          demonstrate how the ideology remains vibrant. Highlight provincial innovations or youth engagement projects to
          show continuity between past ideals and present efforts.
        </div>
      </div>
    </section>
  )
}

export default Practice
