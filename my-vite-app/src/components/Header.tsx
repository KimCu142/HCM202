import MainNav from './MainNav'

type SectionId = 'home' | 'ideology' | 'practice' | 'references'

type HeaderProps = {
  activeSection: SectionId
  onNavigate: (id: SectionId) => void
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/25 bg-white/90 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-start gap-1">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary/70">Tư tưởng Hồ Chí Minh</p>
          <h1 className="text-xl font-serif font-semibold text-midnight md:text-2xl">
            Nhà nước của dân, do dân và vì dân
          </h1>
        </div>
        <MainNav activeSection={activeSection} onNavigate={onNavigate} />
      </div>
    </header>
  )
}

export default Header
