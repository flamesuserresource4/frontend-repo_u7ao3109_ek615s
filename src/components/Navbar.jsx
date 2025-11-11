import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-tr from-purple-500 to-purple-300 shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
            <span className="text-white font-semibold tracking-tight">Zylix</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 text-gray-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="grid gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
