import iconPeople from '../assets/icon-people.svg'
import iconVote from '../assets/icon-vote.svg'
import iconService from '../assets/icon-service.svg'

const ideologySections = [
  {
    title: 'Of the people',
    description:
      'All power belongs to the people. They are the root of legitimacy and the source of every mandate entrusted to the state.',
    image: iconPeople,
    details: [
      'Political power is grounded in popular consensus and revolutionary tradition.',
      'The people supervise the state through mass organizations and civic participation.',
    ],
  },
  {
    title: 'By the people',
    description:
      'The people elect representative institutions that act on their behalf. Leaders must be close to the masses and accountable to them.',
    image: iconVote,
    details: [
      'Universal suffrage ensures the National Assembly and People’s Councils reflect the electorate.',
      'Cadres are selected for integrity, competence, and service ethics.',
    ],
  },
  {
    title: 'For the people',
    description:
      'The state must protect rights, promote development, and ensure that every policy benefits the people first.',
    image: iconService,
    details: [
      'Public institutions prioritize welfare, justice, and social security.',
      'State officials are “public servants” whose success is measured by the people’s satisfaction.',
    ],
  },
]

const Ideology = () => {
  return (
    <section className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Ideological Foundations</h2>
        <p className="text-base text-slate-600">
          Ho Chi Minh articulated a state rooted in socialist democracy. Each component of “of the people, by the
          people, for the people” reinforces the others, forming a complete model for governance in Vietnam.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {ideologySections.map((section) => (
          <article
            key={section.title}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <img
              src={section.image}
              alt={`${section.title} icon`}
              className="h-16 w-16"
              loading="lazy"
            />
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary">{section.title}</h3>
              <p className="text-sm text-slate-600">{section.description}</p>
              <ul className="space-y-2 text-sm text-slate-500">
                {section.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Ideology
