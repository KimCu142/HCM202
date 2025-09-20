import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
