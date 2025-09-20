import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-illustration.svg'

const highlights = [
  {
    title: 'Of the people',
    description:
      'State power originates from the people, reflecting their will, aspirations, and sovereignty.',
  },
  {
    title: 'By the people',
    description:
      'Representative institutions are chosen through democratic elections ensuring accountability to citizens.',
  },
  {
    title: 'For the people',
    description:
      'All state institutions exist to serve the people, protect their rights, and improve their wellbeing.',
  },
]

const Home = () => {
  return (
    <section className="space-y-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-light text-white shadow-lg">
        <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
              Democratic State Building
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Ho Chi Minh&apos;s Vision for a State of the People, by the People, for the People
            </h2>
            <blockquote className="border-l-4 border-sky-300/80 pl-4 text-lg italic text-sky-100">
              “Our regime is the regime of the people, by the people and for the people.”
            </blockquote>
            <p className="text-base text-sky-100/90">
              This project explores how Ho Chi Minh&apos;s ideology laid the foundation for a socialist rule-of-law
              state that centers on popular sovereignty, representative democracy, and service to the people.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/ideology"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-slate-100"
              >
                Explore the Ideology
              </Link>
              <Link
                to="/practice"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Today&apos;s Applications
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={heroImage}
              alt="Illustration of people participating in democratic governance"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-slate-900">Core Pillars at a Glance</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
