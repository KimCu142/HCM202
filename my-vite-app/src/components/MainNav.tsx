import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/ideology', label: 'Ideology' },
  { to: '/practice', label: 'Practice' },
  { to: '/references', label: 'References' }
]

const MainNav = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col gap-2 text-sm font-medium sm:flex-row sm:items-center sm:gap-6">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 transition-colors ${
                  isActive ? 'bg-white text-primary shadow-sm' : 'text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
