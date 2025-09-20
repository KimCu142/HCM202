import { Link } from 'react-router-dom'
import MainNav from './MainNav'

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="flex flex-col items-start gap-1 text-white">
            <p className="text-xs uppercase tracking-wide text-accent/80">
              Ho Chi Minh's Ideology
            </p>
            <h1 className="text-2xl font-semibold md:text-3xl">
              State of the People, By the People, For the People
            </h1>
          </Link>
        </div>
        <MainNav />
      </div>
    </header>
  )
}

export default Header
