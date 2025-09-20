import documentPlaceholder from '../assets/placeholder-document.svg'

const references = [
  {
    title: 'Ho Chi Minh, Selected Works — Volume IV',
    detail: 'National Political Publishing House, Hanoi, 2011. Chapters on socialist democracy and state-building.',
    type: 'Book',
  },
  {
    title: 'Constitution of the Socialist Republic of Vietnam (2013)',
    detail: 'Articles 2, 3, and 6 elaborate the principles of a state of the people, by the people, for the people.',
    type: 'Legal document',
  },
  {
    title: 'Communist Party of Vietnam, 13th National Congress Documents',
    detail: 'Strategic directions for building a socialist rule-of-law state and promoting grassroots democracy.',
    type: 'Party document',
  },
  {
    title: 'Ministry of Home Affairs — Administrative Reform Reports (2020–2023)',
    detail: 'Annual evaluations of the Public Administration Reform Index (PAR Index) across provinces and ministries.',
    type: 'Report',
  },
  {
    title: 'Nguyen Phu Trong, “Promoting the People’s Mastery in the New Era”',
    detail: 'Journal of Political Theory, Issue 6/2021, discussing people-centered governance in contemporary Vietnam.',
    type: 'Article',
  },
]

const References = () => {
  return (
    <section id="references" className="bg-parchment/85 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <header className="grid gap-6 rounded-3xl bg-white/90 p-8 shadow-lg ring-1 ring-primary/10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">References &amp; Archival Sources</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Documenting the People&apos;s State</h2>
            <p className="text-sm leading-relaxed text-midnight/80">
              Replace the items below with your full bibliography. Keep annotations short but informative, and consider
              including archival codes or URLs for quick retrieval. The image area can showcase key documents, book
              covers, or scanned excerpts.
            </p>
          </div>
          <figure className="hidden h-full flex-col items-center justify-center gap-3 rounded-2xl border border-primary/15 bg-parchment/70 p-4 text-xs text-midnight/70 md:flex">
            <img src={documentPlaceholder} alt="Placeholder for document imagery" className="w-48" />
            <figcaption className="text-center">
              Swap with a collage of citations, archival passes, or notable publication covers.
            </figcaption>
          </figure>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <article
              key={reference.title}
              className="rounded-3xl border border-primary/10 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{reference.type}</p>
              <h3 className="mt-2 text-xl font-semibold text-midnight">{reference.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-midnight/80">{reference.detail}</p>
              <p className="mt-4 text-xs text-midnight/60">
                Ghi chú: Thay đoạn này bằng trích dẫn chính xác (APA, Chicago, or local standards) và liên kết nguồn.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default References
