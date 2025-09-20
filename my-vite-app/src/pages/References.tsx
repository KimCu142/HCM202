const references = [
  {
    title: 'Ho Chi Minh, Selected Works — Volume IV',
    detail: 'National Political Publishing House, Hanoi, 2011. Chapters on socialist democracy and state-building.',
    link: '#',
    type: 'Book',
  },
  {
    title: 'Constitution of the Socialist Republic of Vietnam (2013)',
    detail: 'Articles 2, 3, and 6 elaborate the principles of a state of the people, by the people, for the people.',
    link: '#',
    type: 'Legal document',
  },
  {
    title: 'Communist Party of Vietnam, 13th National Congress Documents',
    detail: 'Outlines strategic directions for building a socialist rule-of-law state and promoting grassroots democracy.',
    link: '#',
    type: 'Party document',
  },
  {
    title: 'Ministry of Home Affairs — Administrative Reform Reports (2020–2023)',
    detail: 'Annual evaluations of public administration reform index (PAR Index) across provinces and ministries.',
    link: '#',
    type: 'Report',
  },
  {
    title: 'Nguyen Phu Trong, “Promoting the People’s Mastery in the New Era”',
    detail: 'Journal of Political Theory, Issue 6/2021, discussing people-centered governance in contemporary Vietnam.',
    link: '#',
    type: 'Article',
  },
]

const References = () => {
  return (
    <section className="space-y-10">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">References & Further Reading</h2>
        <p className="text-base text-slate-600">
          Use the sources below as starting points, and replace the placeholders with citations from your research
          (books, journal articles, official reports, or archival documents).
        </p>
      </header>

      <div className="grid gap-6">
        {references.map((reference) => (
          <article
            key={reference.title}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{reference.type}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{reference.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{reference.detail}</p>
            <p className="mt-4 text-xs text-slate-400">
              Replace the placeholder link ({reference.link}) with the actual source URL or citation details.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default References
