import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.slice(2)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    } else {
      setOpen(false)
    }
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Absolutely Fabulous Hair & Beauty" />
        </Link>

        <nav className={`navbar-nav${open ? ' navbar-nav--open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive && l.to !== '/#about' && l.to !== '/#services' ? ' nav-link--active' : ''}`}
              onClick={e => handleAnchor(e, l.to)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/#booking" className="btn btn-primary nav-cta" onClick={e => handleAnchor(e, '/#booking')}>
            Book Now
          </Link>
        </nav>

        <button
          className={`burger${open ? ' burger--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
