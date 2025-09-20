const practiceTimeline = [
  {
    year: '2013',
    title: 'Constitutional affirmation of popular sovereignty',
    description:
      'The 2013 Constitution codifies that the Socialist Republic of Vietnam is the state of the people, by the people, and for the people, with the National Assembly as the highest representative organ.',
  },
  {
    year: '2015–present',
    title: 'Administrative reform and digital government',
    description:
      'National administrative reform programs simplify procedures, expand online public services, and enhance transparency to better serve citizens and businesses.',
  },
  {
    year: '2020–2030',
    title: 'Building a socialist rule-of-law state',
    description:
      'Party documents and state strategies emphasize strengthening the rule of law, judicial reforms, and the protection of human rights in accordance with Ho Chi Minh’s ideology.',
  },
  {
    year: 'Ongoing',
    title: 'Grassroots democracy regulations',
    description:
      'Localities implement grassroots democracy regulations so people directly discuss, decide, and supervise socio-economic projects that affect their communities.',
  },
]

const Practice = () => {
  return (
    <section className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Contemporary Applications</h2>
        <p className="text-base text-slate-600">
          Vietnam translates Ho Chi Minh&apos;s ideology into concrete policies that strengthen democratic participation,
          improve state effectiveness, and protect citizens. The timeline below highlights notable milestones and
          ongoing initiatives.
        </p>
      </header>

      <ol className="relative space-y-8 border-l-2 border-primary/20 pl-6">
        {practiceTimeline.map((item) => (
          <li key={item.title} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <span className="absolute -left-3 top-6 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white text-xs font-semibold text-primary">
              •
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.year}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </li>
        ))}
      </ol>

      <div className="rounded-2xl bg-primary/10 p-6 text-sm text-slate-700">
        <p>
          <strong className="text-primary">Looking ahead:</strong> Continue researching local policies, community
          initiatives, or academic evaluations that demonstrate how governance reforms keep citizens at the center of
          state-building.
        </p>
      </div>
    </section>
  )
}

export default Practice
