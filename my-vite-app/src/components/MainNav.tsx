type SectionId = 'home' | 'ideology' | 'practice' | 'references'

type MainNavProps = {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

const links: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Mở đầu' },
  { id: 'ideology', label: 'Phần I' },
  { id: 'practice', label: 'Phần II' },
  { id: 'references', label: 'Phần III' },
]

const MainNav = ({ activeSection, onNavigate }: MainNavProps) => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col gap-2 text-sm font-medium sm:flex-row sm:items-center sm:gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <button
              type="button"
              onClick={() => onNavigate(link.id)}
              className={`rounded-full px-4 py-2 transition-colors ${
                activeSection === link.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-midnight/70 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
